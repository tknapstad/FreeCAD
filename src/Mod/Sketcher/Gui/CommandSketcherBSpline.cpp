/***************************************************************************
 *   Copyright (c) 2017 Abdullah Tahiri <abdullah.tahiri.yo@gmail.com>     *
 *                                                                         *
 *   This file is part of the FreeCAD CAx development system.              *
 *                                                                         *
 *   This library is free software; you can redistribute it and/or         *
 *   modify it under the terms of the GNU Library General Public           *
 *   License as published by the Free Software Foundation; either          *
 *   version 2 of the License, or (at your option) any later version.      *
 *                                                                         *
 *   This library  is distributed in the hope that it will be useful,      *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU Library General Public License for more details.                  *
 *                                                                         *
 *   You should have received a copy of the GNU Library General Public     *
 *   License along with this library; see the file COPYING.LIB. If not,    *
 *   write to the Free Software Foundation, Inc., 59 Temple Place,         *
 *   Suite 330, Boston, MA  02111-1307, USA                                *
 *                                                                         *
 ***************************************************************************/


#include "PreCompiled.h"
#ifndef _PreComp_
# include <cfloat>
# include <QMessageBox>
# include <Precision.hxx>
# include <QApplication>
# include <Standard_Version.hxx>
# include <QInputDialog>
#endif

#include <Base/Console.h>
#include <Base/UnitsApi.h>
#include <App/Application.h>
#include <Gui/Application.h>
#include <Gui/Document.h>
#include <Gui/Selection.h>
#include <Gui/CommandT.h>
#include <Gui/MainWindow.h>
#include <Gui/DlgEditFileIncludePropertyExternal.h>

#include <Gui/Action.h>
#include <Gui/BitmapFactory.h>

#include "ViewProviderSketch.h"
#include "DrawSketchHandler.h"

#include <Mod/Part/App/Geometry.h>
#include <Mod/Sketcher/App/SketchObject.h>

#include "Utils.h"

using namespace std;
using namespace SketcherGui;
using namespace Sketcher;

bool isSketcherBSplineActive(Gui::Document *doc, bool actsOnSelection)
{
    if (doc) {
        // checks if a Sketch Viewprovider is in Edit and is in no special mode
        if (doc->getInEdit() && doc->getInEdit()->isDerivedFrom(SketcherGui::ViewProviderSketch::getClassTypeId())) {
            if (static_cast<SketcherGui::ViewProviderSketch*>(doc->getInEdit())->getSketchMode() == ViewProviderSketch::STATUS_NONE) {
                if (!actsOnSelection)
                    return true;
                else if (Gui::Selection().countObjectsOfType(Sketcher::SketchObject::getClassTypeId()) > 0)
                    return true;
            }
        }
    }
    return false;
}

void ActivateBSplineHandler(Gui::Document *doc,DrawSketchHandler *handler)
{
    if (doc) {
        if (doc->getInEdit() && doc->getInEdit()->isDerivedFrom(SketcherGui::ViewProviderSketch::getClassTypeId())) {
            SketcherGui::ViewProviderSketch* vp = static_cast<SketcherGui::ViewProviderSketch*> (doc->getInEdit());
            vp->purgeHandler();
            vp->activateHandler(handler);
        }
    }
}

void ShowRestoreInformationLayer(const char * visibleelementname)
{
    ParameterGrp::handle hGrp = App::GetApplication().GetParameterGroupByPath("User parameter:BaseApp/Preferences/Mod/Sketcher/General");
    bool status = hGrp->GetBool(visibleelementname, true);
    hGrp->SetBool(visibleelementname, !status);
}

// Show/Hide B-spline degree
DEF_STD_CMD_A(CmdSketcherBSplineDegree)

CmdSketcherBSplineDegree::CmdSketcherBSplineDegree()
    : Command("Sketcher_BSplineDegree")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Show/hide B-spline degree");
    sToolTipText    = QT_TR_NOOP("Switches between showing and hiding the degree for all B-splines");
    sWhatsThis      = "Sketcher_BSplineDegree";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineDegree";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherBSplineDegree::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    ShowRestoreInformationLayer("BSplineDegreeVisible");
}

bool CmdSketcherBSplineDegree::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

// Show/Hide B-spline polygon
DEF_STD_CMD_A(CmdSketcherBSplinePolygon)

CmdSketcherBSplinePolygon::CmdSketcherBSplinePolygon()
    : Command("Sketcher_BSplinePolygon")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Show/hide B-spline control polygon");
    sToolTipText    = QT_TR_NOOP("Switches between showing and hiding the control polygons for all B-splines");
    sWhatsThis      = "Sketcher_BSplinePolygon";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplinePolygon";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherBSplinePolygon::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    ShowRestoreInformationLayer("BSplineControlPolygonVisible");
}

bool CmdSketcherBSplinePolygon::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

// Show/Hide B-spline comb
DEF_STD_CMD_A(CmdSketcherBSplineComb)

CmdSketcherBSplineComb::CmdSketcherBSplineComb()
    : Command("Sketcher_BSplineComb")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Show/hide B-spline curvature comb");
    sToolTipText    = QT_TR_NOOP("Switches between showing and hiding the curvature comb for all B-splines");
    sWhatsThis      = "Sketcher_BSplineComb";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineComb";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherBSplineComb::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    ShowRestoreInformationLayer("BSplineCombVisible");
}

bool CmdSketcherBSplineComb::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

//
DEF_STD_CMD_A(CmdSketcherBSplineKnotMultiplicity)

CmdSketcherBSplineKnotMultiplicity::CmdSketcherBSplineKnotMultiplicity()
    : Command("Sketcher_BSplineKnotMultiplicity")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Show/hide B-spline knot multiplicity");
    sToolTipText    = QT_TR_NOOP("Switches between showing and hiding the knot multiplicity for all B-splines");
    sWhatsThis      = "Sketcher_BSplineKnotMultiplicity";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineKnotMultiplicity";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherBSplineKnotMultiplicity::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    ShowRestoreInformationLayer("BSplineKnotMultiplicityVisible");
}

bool CmdSketcherBSplineKnotMultiplicity::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

//
DEF_STD_CMD_A(CmdSketcherBSplinePoleWeight)

CmdSketcherBSplinePoleWeight::CmdSketcherBSplinePoleWeight()
    : Command("Sketcher_BSplinePoleWeight")
{
    sAppModule = "Sketcher";
    sGroup = "Sketcher";
    sMenuText = QT_TR_NOOP("Show/hide B-spline control point weight");
    sToolTipText = QT_TR_NOOP("Switches between showing and hiding the control point weight for all B-splines");
    sWhatsThis = "Sketcher_BSplinePoleWeight";
    sStatusTip = sToolTipText;
    sPixmap = "Sketcher_BSplinePoleWeight";
    sAccel = "";
    eType = ForEdit;
}

void CmdSketcherBSplinePoleWeight::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    ShowRestoreInformationLayer("BSplinePoleWeightVisible");
}

bool CmdSketcherBSplinePoleWeight::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

// Composite drop down menu for show/hide geometry information layer
DEF_STD_CMD_ACLU(CmdSketcherCompBSplineShowHideGeometryInformation)

CmdSketcherCompBSplineShowHideGeometryInformation::CmdSketcherCompBSplineShowHideGeometryInformation()
    : Command("Sketcher_CompBSplineShowHideGeometryInformation")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Show/hide B-spline information layer");
    sToolTipText    = sMenuText;
    sWhatsThis      = "Sketcher_CompBSplineShowHideGeometryInformation";
    sStatusTip      = sToolTipText;
    eType           = ForEdit;
}

void CmdSketcherCompBSplineShowHideGeometryInformation::activated(int iMsg)
{
    Gui::CommandManager &rcCmdMgr = Gui::Application::Instance->commandManager();
    Gui::Command * cmd;

    if (iMsg == 0)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplineDegree");
    else if (iMsg == 1)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplinePolygon");
    else if (iMsg == 2)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplineComb");
    else if (iMsg == 3)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplineKnotMultiplicity");
    else if (iMsg == 4)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplinePoleWeight");
    else
        return;

    cmd->invoke(0);

    // Since the default icon is reset when enabling/disabling the command we have
    // to explicitly set the icon of the used command.
    Gui::ActionGroup* pcAction = qobject_cast<Gui::ActionGroup*>(_pcAction);
    QList<QAction*> a = pcAction->actions();

    assert(iMsg < a.size());
    pcAction->setIcon(a[iMsg]->icon());
    // we must also set the tooltip of the used command
    pcAction->setToolTip(a[iMsg]->toolTip());
}

Gui::Action * CmdSketcherCompBSplineShowHideGeometryInformation::createAction(void)
{
    Gui::ActionGroup* pcAction = new Gui::ActionGroup(this, Gui::getMainWindow());
    pcAction->setDropDownMenu(true);
    applyCommandData(this->className(), pcAction);

    QAction* c1 = pcAction->addAction(QString());
    c1->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplineDegree"));
    QAction* c2 = pcAction->addAction(QString());
    c2->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplinePolygon"));
    QAction* c3 = pcAction->addAction(QString());
    c3->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplineComb"));
    QAction* c4 = pcAction->addAction(QString());
    c4->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplineKnotMultiplicity"));
    QAction* c5 = pcAction->addAction(QString());
    c5->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplinePoleWeight"));

    _pcAction = pcAction;
    languageChange();

    pcAction->setIcon(c2->icon());
    int defaultId = 1;
    pcAction->setProperty("defaultAction", QVariant(defaultId));

    return pcAction;
}

void CmdSketcherCompBSplineShowHideGeometryInformation::languageChange()
{
    Command::languageChange();

    if (!_pcAction)
        return;
    Gui::ActionGroup* pcAction = qobject_cast<Gui::ActionGroup*>(_pcAction);
    QList<QAction*> a = pcAction->actions();

    QAction* c1 = a[0];
    c1->setText(QApplication::translate("CmdSketcherCompBSplineShowHideGeometryInformation",
                                        "Show/hide B-spline degree"));
    c1->setToolTip(QApplication::translate("Sketcher_BSplineDegree",
                                           "Switches between showing and hiding the degree for all B-splines"));
    c1->setStatusTip(QApplication::translate("Sketcher_BSplineDegree",
                                             "Switches between showing and hiding the degree for all B-splines"));
    QAction* c2 = a[1];
    c2->setText(QApplication::translate("CmdSketcherCompBSplineShowHideGeometryInformation",
                                        "Show/hide B-spline control polygon"));
    c2->setToolTip(QApplication::translate("Sketcher_BSplinePolygon",
                                           "Switches between showing and hiding the control polygons for all B-splines"));
    c2->setStatusTip(QApplication::translate("Sketcher_BSplinePolygon",
                                             "Switches between showing and hiding the control polygons for all B-splines"));
    QAction* c3 = a[2];
    c3->setText(QApplication::translate("CmdSketcherCompBSplineShowHideGeometryInformation",
                                        "Show/hide B-spline curvature comb"));
    c3->setToolTip(QApplication::translate("Sketcher_BSplineComb",
                                           "Switches between showing and hiding the curvature comb for all B-splines"));
    c3->setStatusTip(QApplication::translate("Sketcher_BSplineComb",
                                             "Switches between showing and hiding the curvature comb for all B-splines"));
    QAction* c4 = a[3];
    c4->setText(QApplication::translate("CmdSketcherCompBSplineShowHideGeometryInformation",
                                        "Show/hide B-spline knot multiplicity"));
    c4->setToolTip(QApplication::translate("Sketcher_BSplineKnotMultiplicity",
                                           "Switches between showing and hiding the knot multiplicity for all B-splines"));
    c4->setStatusTip(QApplication::translate("Sketcher_BSplineKnotMultiplicity",
                                             "Switches between showing and hiding the knot multiplicity for all B-splines"));

    QAction* c5 = a[4];
    c5->setText(QApplication::translate("CmdSketcherCompBSplineShowHideGeometryInformation",
        "Show/hide B-spline control point weight"));
    c5->setToolTip(QApplication::translate("Sketcher_BSplinePoleWeight",
        "Switches between showing and hiding the control point weight for all B-splines"));
    c5->setStatusTip(QApplication::translate("Sketcher_BSplinePoleWeight",
        "Switches between showing and hiding the control point weight for all B-splines"));
}

void CmdSketcherCompBSplineShowHideGeometryInformation::updateAction(int /*mode*/)
{
}

bool CmdSketcherCompBSplineShowHideGeometryInformation::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

// Convert to NURBS
DEF_STD_CMD_A(CmdSketcherConvertToNURB)

CmdSketcherConvertToNURB::CmdSketcherConvertToNURB()
    : Command("Sketcher_BSplineConvertToNURB")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Convert geometry to B-spline");
    sToolTipText    = QT_TR_NOOP("Converts the selected geometry to a B-spline");
    sWhatsThis      = "Sketcher_BSplineConvertToNURB";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineApproximate";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherConvertToNURB::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    // get the selection
    std::vector<Gui::SelectionObject> selection;
    selection = getSelection().getSelectionEx(0, Sketcher::SketchObject::getClassTypeId());

    // only one sketch with its subelements are allowed to be selected
    if (selection.size() != 1) {
        return;
    }

    // get the needed lists and objects
    const std::vector<std::string> &SubNames = selection[0].getSubNames();
    Sketcher::SketchObject* Obj = static_cast<Sketcher::SketchObject*>(selection[0].getObject());

    bool nurbsized = false;

    openCommand(QT_TRANSLATE_NOOP("Command", "Convert to NURBS"));

    for (size_t i=0; i < SubNames.size(); i++) {
        // only handle edges
        if (SubNames[i].size() > 4 && SubNames[i].substr(0,4) == "Edge") {
            int GeoId = std::atoi(SubNames[i].substr(4,4000).c_str()) - 1;
            Gui::cmdAppObjectArgs(selection[0].getObject(), "convertToNURBS(%d) ", GeoId);
            nurbsized = true;
        }
        else if (SubNames[i].size() > 12 && SubNames[i].substr(0,12) == "ExternalEdge") {
            int GeoId = - (std::atoi(SubNames[i].substr(12,4000).c_str()) + 2);
            Gui::cmdAppObjectArgs(selection[0].getObject(), "convertToNURBS(%d) ", GeoId);
            nurbsized = true;
        }
    }

    if (!nurbsized) {
        abortCommand();
        QMessageBox::warning(Gui::getMainWindow(), QObject::tr("Wrong selection"),
                             QObject::tr("None of the selected elements is an edge."));
    }
    else {
        commitCommand();
    }
    tryAutoRecomputeIfNotSolve(Obj);
}

bool CmdSketcherConvertToNURB::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), true);
}

// Increase degree of the spline
DEF_STD_CMD_A(CmdSketcherIncreaseDegree)

CmdSketcherIncreaseDegree::CmdSketcherIncreaseDegree()
    : Command("Sketcher_BSplineIncreaseDegree")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Increase B-spline degree");
    sToolTipText    = QT_TR_NOOP("Increases the degree of the B-spline");
    sWhatsThis      = "Sketcher_BSplineIncreaseDegree";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineIncreaseDegree";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherIncreaseDegree::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    // get the selection
    std::vector<Gui::SelectionObject> selection;
    selection = getSelection().getSelectionEx(0, Sketcher::SketchObject::getClassTypeId());

    // only one sketch with its subelements are allowed to be selected
    if (selection.size() != 1) {
        return;
    }

    // get the needed lists and objects
    const std::vector<std::string> &SubNames = selection[0].getSubNames();
    Sketcher::SketchObject* Obj = static_cast<Sketcher::SketchObject*>(selection[0].getObject());

    openCommand(QT_TRANSLATE_NOOP("Command", "Increase spline degree"));

    bool ignored = false;

    for (size_t i=0; i < SubNames.size(); i++) {
        // only handle edges
        if (SubNames[i].size() > 4 && SubNames[i].substr(0,4) == "Edge") {
            int GeoId = std::atoi(SubNames[i].substr(4,4000).c_str()) - 1;
            const Part::Geometry * geo = Obj->getGeometry(GeoId);

            if (geo->getTypeId() == Part::GeomBSplineCurve::getClassTypeId()) {
                Gui::cmdAppObjectArgs(selection[0].getObject(), "increaseBSplineDegree(%d) ", GeoId);
                // add new control points
                Gui::cmdAppObjectArgs(selection[0].getObject(), "exposeInternalGeometry(%d)", GeoId);
            }
            else {
                ignored = true;
            }
        }
    }

    if (ignored) {
        QMessageBox::warning(Gui::getMainWindow(),
                             QObject::tr("Wrong selection"),
                             QObject::tr("At least one of the selected "
                                         "objects was not a B-Spline and was ignored."));
    }

    commitCommand();
    tryAutoRecomputeIfNotSolve(Obj);
    getSelection().clearSelection();
}

bool CmdSketcherIncreaseDegree::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), true);
}


// Decrease degree of the spline
DEF_STD_CMD_A(CmdSketcherDecreaseDegree)

CmdSketcherDecreaseDegree::CmdSketcherDecreaseDegree()
    : Command("Sketcher_BSplineDecreaseDegree")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Decrease B-spline degree");
    sToolTipText    = QT_TR_NOOP("Decreases the degree of the B-spline");
    sWhatsThis      = "Sketcher_BSplineDecreaseDegree";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineDecreaseDegree";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherDecreaseDegree::activated(int iMsg)
{
    Q_UNUSED(iMsg);

    // get the selection
    std::vector<Gui::SelectionObject> selection;
    selection = getSelection().getSelectionEx(0, Sketcher::SketchObject::getClassTypeId());

    // only one sketch with its subelements are allowed to be selected
    if (selection.size() != 1) {
        return;
    }

    getSelection().clearSelection();

    // get the needed lists and objects
    const std::vector<std::string> &SubNames = selection[0].getSubNames();
    Sketcher::SketchObject* Obj = static_cast<Sketcher::SketchObject*>(selection[0].getObject());

    openCommand(QT_TRANSLATE_NOOP("Command", "Decrease spline degree"));

    bool ignored = false;

    for (size_t i=0; i < SubNames.size(); i++) {
        // only handle edges
        if (SubNames[i].size() > 4 && SubNames[i].substr(0,4) == "Edge") {
            int GeoId = std::atoi(SubNames[i].substr(4,4000).c_str()) - 1;
            const Part::Geometry * geo = Obj->getGeometry(GeoId);

            if (geo->getTypeId() == Part::GeomBSplineCurve::getClassTypeId()) {
                Gui::cmdAppObjectArgs(selection[0].getObject(), "decreaseBSplineDegree(%d) ", GeoId);
                // add new control points
                // Currently exposeInternalGeometry is called from within decreaseBSplineDegree because
                // the old spline is deleted and a new one is added so that the GeoId is invalid afterwards
                //Gui::cmdAppObjectArgs(selection[0].getObject(), "exposeInternalGeometry(%d)", GeoId);
                break; // cannot handle more than spline because the GeoIds will be invalidated after the first change
            }
            else {
                ignored = true;
            }
        }
    }

    if (ignored) {
        QMessageBox::warning(Gui::getMainWindow(),
                             QObject::tr("Wrong selection"),
                             QObject::tr("At least one of the selected "
                                         "objects was not a B-Spline and was ignored."));
    }

    commitCommand();
    tryAutoRecomputeIfNotSolve(Obj);
    getSelection().clearSelection();
}

bool CmdSketcherDecreaseDegree::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), true);
}


DEF_STD_CMD_A(CmdSketcherIncreaseKnotMultiplicity)

CmdSketcherIncreaseKnotMultiplicity::CmdSketcherIncreaseKnotMultiplicity()
    : Command("Sketcher_BSplineIncreaseKnotMultiplicity")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Increase knot multiplicity");
    sToolTipText    = QT_TR_NOOP("Increases the multiplicity of the selected knot of a B-spline");
    sWhatsThis      = "Sketcher_BSplineIncreaseKnotMultiplicity";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineIncreaseKnotMultiplicity";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherIncreaseKnotMultiplicity::activated(int iMsg)
{
    Q_UNUSED(iMsg);

#if OCC_VERSION_HEX < 0x060900
    QMessageBox::warning(Gui::getMainWindow(),
                         QObject::tr("Wrong OCE/OCC version"),
                         QObject::tr("This version of OCE/OCC "
                                     "does not support knot operation. "
                                     "You need 6.9.0 or higher"));
    return;
#endif

    // get the selection
    std::vector<Gui::SelectionObject> selection;
    selection = getSelection().getSelectionEx(0, Sketcher::SketchObject::getClassTypeId());

    // only one sketch with its subelements are allowed to be selected
    if (selection.size() != 1) {
        return;
    }

    // get the needed lists and objects
    const std::vector<std::string> &SubNames = selection[0].getSubNames();

    if (SubNames.size() > 1) {
        // Check that only one object is selected,
        // as we need only one object to get the new GeoId after multiplicity change
        QMessageBox::warning(Gui::getMainWindow(), QObject::tr("Wrong selection"),
                             QObject::tr("The selection comprises more than one item. Please select just one knot."));
        return;
    }

    Sketcher::SketchObject* Obj = static_cast<Sketcher::SketchObject*>(selection[0].getObject());

    openCommand(QT_TRANSLATE_NOOP("Command", "Increase knot multiplicity"));

    bool applied = false;
    bool notaknot = true;
    boost::uuids::uuid bsplinetag;

    int GeoId;
    Sketcher::PointPos PosId;
    getIdsFromName(SubNames[0], Obj, GeoId, PosId);

    if (isSimpleVertex(Obj, GeoId, PosId)) {
        const std::vector<Sketcher::Constraint *> &vals = Obj->Constraints.getValues();

        for (std::vector<Sketcher::Constraint *>::const_iterator it= vals.begin(); it != vals.end(); ++it) {
            if ((*it)->Type == Sketcher::InternalAlignment
                && (*it)->First == GeoId
                && (*it)->AlignmentType == Sketcher::BSplineKnotPoint)
            {
                bsplinetag = Obj->getGeometry((*it)->Second)->getTag();
                notaknot = false;

                try {
                    Gui::cmdAppObjectArgs(selection[0].getObject(),
                                          "modifyBSplineKnotMultiplicity(%d, %d, %d) ",
                                          (*it)->Second, (*it)->InternalAlignmentIndex + 1, 1);
                    applied = true;

                    // Warning: GeoId list might have changed
                    // as the consequence of deleting pole circles and
                    // particularly B-spline GeoID might have changed.
                }
                catch (const Base::CADKernelError& e) {
                    e.ReportException();
                    if (e.getTranslatable()) {
                        QMessageBox::warning(Gui::getMainWindow(),
                                             QObject::tr("CAD Kernel Error"),
                                             QObject::tr(e.getMessage().c_str()));
                    }
                    getSelection().clearSelection();
                }
                catch (const Base::Exception& e) {
                    e.ReportException();
                    if (e.getTranslatable()) {
                        QMessageBox::warning(Gui::getMainWindow(),
                                             QObject::tr("Input Error"),
                                             QObject::tr(e.getMessage().c_str()));
                    }
                    getSelection().clearSelection();
                }
                break;  // we have already found our knot.
            }
        }
    }

    if (notaknot) {
        QMessageBox::warning(Gui::getMainWindow(),
                             QObject::tr("Wrong selection"),
                             QObject::tr("None of the selected elements is a knot of a B-spline"));
    }

    if (applied)
    {
        // find new geoid for B-spline as GeoId might have changed
        const std::vector< Part::Geometry * > &gvals = Obj->getInternalGeometry();

        int ngeoid = 0;
        bool ngfound = false;

        for (std::vector<Part::Geometry *>::const_iterator geo = gvals.begin(); geo != gvals.end(); geo++, ngeoid++) {
            if ((*geo) && (*geo)->getTag() == bsplinetag) {
                ngfound = true;
                break;
            }
        }

        if (ngfound) {
            try {
                // add internalalignment for new pole
                Gui::cmdAppObjectArgs(selection[0].getObject(), "exposeInternalGeometry(%d)", ngeoid);
            }
            catch (const Base::Exception& e) {
                Base::Console().Error("%s\n", e.what());
                getSelection().clearSelection();
            }
        }
    }

    if (!applied) {
        abortCommand();
    }
    else {
        commitCommand();
    }

    tryAutoRecomputeIfNotSolve(Obj);
    getSelection().clearSelection();
}

bool CmdSketcherIncreaseKnotMultiplicity::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), true);
}

DEF_STD_CMD_A(CmdSketcherDecreaseKnotMultiplicity)

CmdSketcherDecreaseKnotMultiplicity::CmdSketcherDecreaseKnotMultiplicity()
    : Command("Sketcher_BSplineDecreaseKnotMultiplicity")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Decrease knot multiplicity");
    sToolTipText    = QT_TR_NOOP("Decreases the multiplicity of the selected knot of a B-spline");
    sWhatsThis      = "Sketcher_BSplineDecreaseKnotMultiplicity";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineDecreaseKnotMultiplicity";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherDecreaseKnotMultiplicity::activated(int iMsg)
{
    Q_UNUSED(iMsg);

#if OCC_VERSION_HEX < 0x060900
    QMessageBox::warning(Gui::getMainWindow(),
                         QObject::tr("Wrong OCE/OCC version"),
                         QObject::tr("This version of OCE/OCC "
                                     "does not support knot operation. "
                                     "You need 6.9.0 or higher"));
    return;
#endif

    // get the selection
    std::vector<Gui::SelectionObject> selection;
    selection = getSelection().getSelectionEx(0, Sketcher::SketchObject::getClassTypeId());

    // only one sketch with its subelements are allowed to be selected
    if (selection.size() != 1) {
        return;
    }

    // get the needed lists and objects
    const std::vector<std::string> &SubNames = selection[0].getSubNames();

    if (SubNames.size() > 1) {
        // Check that only one object is selected,
        // as we need only one object to get the new GeoId after multiplicity change
        QMessageBox::warning(Gui::getMainWindow(), QObject::tr("Wrong selection"),
                             QObject::tr("The selection comprises more than one item. Please select just one knot."));
        return;
    }

    Sketcher::SketchObject* Obj = static_cast<Sketcher::SketchObject*>(selection[0].getObject());

    openCommand(QT_TRANSLATE_NOOP("Command", "Decrease knot multiplicity"));

    bool applied = false;
    bool notaknot = true;
    boost::uuids::uuid bsplinetag;

    int GeoId;
    Sketcher::PointPos PosId;
    getIdsFromName(SubNames[0], Obj, GeoId, PosId);

    if (isSimpleVertex(Obj, GeoId, PosId))
    {
        const std::vector< Sketcher::Constraint * > &vals = Obj->Constraints.getValues();

        for (std::vector< Sketcher::Constraint * >::const_iterator it= vals.begin(); it != vals.end(); ++it) {
            if ((*it)->Type == Sketcher::InternalAlignment
                && (*it)->First == GeoId
                && (*it)->AlignmentType == Sketcher::BSplineKnotPoint)
            {
                bsplinetag = Obj->getGeometry((*it)->Second)->getTag();
                notaknot = false;

                try {
                    Gui::cmdAppObjectArgs(selection[0].getObject(),
                                          "modifyBSplineKnotMultiplicity(%d, %d, %d) ",
                                          (*it)->Second, (*it)->InternalAlignmentIndex + 1, -1);
                    applied = true;

                    // Warning: GeoId list might have changed as the consequence of deleting pole circles and
                    // particularly B-spline GeoID might have changed.
                }
                catch (const Base::Exception& e) {
                    QMessageBox::warning(Gui::getMainWindow(), QObject::tr("Error"),
                                         QObject::tr(getStrippedPythonExceptionString(e).c_str()));
                    getSelection().clearSelection();
                }
                break;  // we have already found our knot.
            }
        }
    }

    if (notaknot) {
        QMessageBox::warning(Gui::getMainWindow(), QObject::tr("Wrong selection"),
                             QObject::tr("None of the selected elements is a knot of a B-spline"));
    }

    if (applied)
    {
        // find new geoid for B-spline as GeoId might have changed
        const std::vector< Part::Geometry * > &gvals = Obj->getInternalGeometry();

        int ngeoid = 0;
        bool ngfound = false;

        for (std::vector<Part::Geometry *>::const_iterator geo = gvals.begin(); geo != gvals.end(); geo++, ngeoid++) {
            if ((*geo) && (*geo)->getTag() == bsplinetag) {
                ngfound = true;
                break;
            }
        }

        if (ngfound) {
            try {
                // add internalalignment for new pole
                Gui::cmdAppObjectArgs(selection[0].getObject(), "exposeInternalGeometry(%d)", ngeoid);
            }
            catch (const Base::Exception& e) {
                Base::Console().Error("%s\n", e.what());
                getSelection().clearSelection();
            }
        }
    }

    if (!applied) {
        abortCommand();
    }
    else {
        commitCommand();
    }

    tryAutoRecomputeIfNotSolve(Obj);
    getSelection().clearSelection();
}

bool CmdSketcherDecreaseKnotMultiplicity::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), true);
}


// Composite drop down for knot increase/decrease
DEF_STD_CMD_ACLU(CmdSketcherCompModifyKnotMultiplicity)

CmdSketcherCompModifyKnotMultiplicity::CmdSketcherCompModifyKnotMultiplicity()
    : Command("Sketcher_CompModifyKnotMultiplicity")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Modify knot multiplicity");
    sToolTipText    = QT_TR_NOOP("Modifies the multiplicity of the selected knot of a B-spline");
    sWhatsThis      = "Sketcher_CompModifyKnotMultiplicity";
    sStatusTip      = sToolTipText;
    eType           = ForEdit;
}

void CmdSketcherCompModifyKnotMultiplicity::activated(int iMsg)
{

    Gui::CommandManager &rcCmdMgr = Gui::Application::Instance->commandManager();
    Gui::Command * cmd;

    if (iMsg == 0)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplineIncreaseKnotMultiplicity");
    else if (iMsg == 1)
        cmd = rcCmdMgr.getCommandByName("Sketcher_BSplineDecreaseKnotMultiplicity");
    else
        return;

    cmd->invoke(0);

    // Since the default icon is reset when enabling/disabling the command we have
    // to explicitly set the icon of the used command.
    Gui::ActionGroup* pcAction = qobject_cast<Gui::ActionGroup*>(_pcAction);
    QList<QAction*> a = pcAction->actions();

    assert(iMsg < a.size());
    pcAction->setIcon(a[iMsg]->icon());
}

Gui::Action * CmdSketcherCompModifyKnotMultiplicity::createAction(void)
{
    Gui::ActionGroup* pcAction = new Gui::ActionGroup(this, Gui::getMainWindow());
    pcAction->setDropDownMenu(true);
    applyCommandData(this->className(), pcAction);

    QAction* c1 = pcAction->addAction(QString());
    c1->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplineIncreaseKnotMultiplicity"));
    QAction* c2 = pcAction->addAction(QString());
    c2->setIcon(Gui::BitmapFactory().iconFromTheme("Sketcher_BSplineDecreaseKnotMultiplicity"));

    _pcAction = pcAction;
    languageChange();

    pcAction->setIcon(c1->icon());
    int defaultId = 0;
    pcAction->setProperty("defaultAction", QVariant(defaultId));

    return pcAction;
}

void CmdSketcherCompModifyKnotMultiplicity::languageChange()
{
    Command::languageChange();

    if (!_pcAction)
        return;
    Gui::ActionGroup* pcAction = qobject_cast<Gui::ActionGroup*>(_pcAction);
    QList<QAction*> a = pcAction->actions();

    QAction* c1 = a[0];
    c1->setText(QApplication::translate("CmdSketcherCompModifyKnotMultiplicity",
                                        "Increase knot multiplicity"));
    c1->setToolTip(QApplication::translate("Sketcher_BSplineIncreaseKnotMultiplicity",
                                           "Increases the multiplicity of the selected knot of a B-spline"));
    c1->setStatusTip(QApplication::translate("Sketcher_BSplineIncreaseKnotMultiplicity",
                                             "Increases the multiplicity of the selected knot of a B-spline"));
    QAction* c2 = a[1];
    c2->setText(QApplication::translate("CmdSketcherCompModifyKnotMultiplicity",
                                        "Decrease knot multiplicity"));
    c2->setToolTip(QApplication::translate("Sketcher_BSplineDecreaseKnotMultiplicity",
                                           "Decreases the multiplicity of the selected knot of a B-spline"));
    c2->setStatusTip(QApplication::translate("Sketcher_BSplineDecreaseKnotMultiplicity",
                                             "Decreases the multiplicity of the selected knot of a B-spline"));
}

void CmdSketcherCompModifyKnotMultiplicity::updateAction(int /*mode*/)
{
}

bool CmdSketcherCompModifyKnotMultiplicity::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), false);
}

DEF_STD_CMD_A(CmdSketcherInsertKnot)

CmdSketcherInsertKnot::CmdSketcherInsertKnot()
    : Command("Sketcher_BSplineInsertKnot")
{
    sAppModule      = "Sketcher";
    sGroup          = "Sketcher";
    sMenuText       = QT_TR_NOOP("Insert knot");
    sToolTipText    = QT_TR_NOOP("Inserts knot at given parameter. If a knot already exists at that parameter, it's multiplicity is increased by one.");
    sWhatsThis      = "Sketcher_BSplineInsertKnot";
    sStatusTip      = sToolTipText;
    sPixmap         = "Sketcher_BSplineInsertKnot";
    sAccel          = "";
    eType           = ForEdit;
}

void CmdSketcherInsertKnot::activated(int iMsg)
{
    Q_UNUSED(iMsg);

#if OCC_VERSION_HEX < 0x060900
    QMessageBox::warning(Gui::getMainWindow(),
                         QObject::tr("Wrong OCE/OCC version"),
                         QObject::tr("This version of OCE/OCC "
                                     "does not support knot operation. "
                                     "You need 6.9.0 or higher"));
    return;
#endif

    // get the selection
    std::vector<Gui::SelectionObject> selection;
    selection = getSelection().getSelectionEx(0, Sketcher::SketchObject::getClassTypeId());

    // TODO: let user click on a curve after pressing command.
    // only one sketch with its subelements are allowed to be selected
    if (selection.size() != 1) {
        return;
    }

    // get the needed lists and objects
    const std::vector<std::string> &SubNames = selection[0].getSubNames();
    if (SubNames.size() == 0) {
      // Check that only one object is selected,
      // as we need only one object to get the new GeoId after multiplicity change
      QMessageBox::warning(Gui::getMainWindow(), QObject::tr("Selection is empty"),
                           QObject::tr("Nothing is selected. Please select a b-spline."));
      return;
    }
    Sketcher::SketchObject* Obj = static_cast<Sketcher::SketchObject*>(selection[0].getObject());

    openCommand(QT_TRANSLATE_NOOP("Command", "Insert knot (incomplete)"));

    bool applied = false;

    // TODO: Ensure GeoId is for the BSpline and not for it's internal geometry
    int GeoId = std::atoi(SubNames[0].substr(4,4000).c_str()) - 1;

    boost::uuids::uuid bsplinetag = Obj->getGeometry(GeoId)->getTag();

    try {
        // TODO: Get param from user input by clicking on desired spot
        // Get param from user input into a box
        const Part::GeomBSplineCurve *bsp =
            static_cast<const Part::GeomBSplineCurve *>(Obj->getGeometry(GeoId));
        const auto& knots = bsp->getKnots();
        const auto& mults = bsp->getMultiplicities();
        QInputDialog knotDialog(Gui::getMainWindow());
        knotDialog.setInputMode(QInputDialog::DoubleInput);
        knotDialog.setDoubleDecimals(Base::UnitsApi::getDecimals());
        knotDialog.setWindowTitle(QObject::tr("Knot parameter"));
        // use values from `knots` and `weights` and insert in label
        std::stringstream knotList;
        {
            auto it = knots.cbegin();
            knotList << "(" << (*it++);
            for (; it != knots.cend(); ++it)
                knotList << ", " << (*it);
            knotList << ")";
        }
        std::stringstream multList;
        {
            auto it = mults.cbegin();
            multList << "(" << (*it++);
            for (; it != mults.cend(); ++it)
                multList << ", " << (*it);
            multList << ")";
        }
        knotDialog.setLabelText(QObject::tr("Please provide the parameter where the knot is to be inserted.\n"
                                            "Current knots: %1\n"
                                            "Multiplicities: %2\n")
                                .arg(QString::fromUtf8(knotList.str().c_str()))
                                .arg(QString::fromUtf8(multList.str().c_str())));
        // use an appropriate middle value from `knots`
        knotDialog.setDoubleValue(0.5 * (knots.front() + knots.back()));
#if QT_VERSION >= QT_VERSION_CHECK(5,10,0)
        // set step size dependent on the knot range
        knotDialog.setDoubleStep(0.001 * (knots.back() - knots.front()));
#endif
        // use min/max from `knots`
        knotDialog.setDoubleRange(knots.front(), knots.back());

        int ret = knotDialog.exec();

        if (ret == QDialog::Accepted) {
            double param = knotDialog.doubleValue();
            Gui::cmdAppObjectArgs(selection[0].getObject(),
                                  "insertBSplineKnot(%d, %lf, %d) ",
                                  GeoId, param, 1);
            applied = true;

            // Warning: GeoId list might have changed
            // as the consequence of deleting pole circles and
            // particularly B-spline GeoID might have changed.
        }
    }
    catch (const Base::CADKernelError& e) {
      e.ReportException();
      if (e.getTranslatable()) {
        QMessageBox::warning(Gui::getMainWindow(),
                             QObject::tr("CAD Kernel Error"),
                             QObject::tr(e.getMessage().c_str()));
      }
      getSelection().clearSelection();
    }
    catch (const Base::Exception& e) {
      e.ReportException();
      if (e.getTranslatable()) {
        QMessageBox::warning(Gui::getMainWindow(),
                             QObject::tr("Input Error"),
                             QObject::tr(e.getMessage().c_str()));
      }
      getSelection().clearSelection();
    }

    if (applied)
    {
        // find new geoid for B-spline as GeoId might have changed
        const std::vector< Part::Geometry * > &gvals = Obj->getInternalGeometry();

        int ngeoid = 0;
        bool ngfound = false;

        for (std::vector<Part::Geometry *>::const_iterator geo = gvals.begin(); geo != gvals.end(); geo++, ngeoid++) {
            if ((*geo) && (*geo)->getTag() == bsplinetag) {
                ngfound = true;
                break;
            }
        }

        if (ngfound) {
            try {
                // add internalalignment for new pole
                Gui::cmdAppObjectArgs(selection[0].getObject(), "exposeInternalGeometry(%d)", ngeoid);
            }
            catch (const Base::Exception& e) {
                Base::Console().Error("%s\n", e.what());
                getSelection().clearSelection();
            }
        }
    }

    if (applied)
      commitCommand();
    else
      abortCommand();

    tryAutoRecomputeIfNotSolve(Obj);
    getSelection().clearSelection();
}

bool CmdSketcherInsertKnot::isActive(void)
{
    return isSketcherBSplineActive(getActiveGuiDocument(), true);
}

void CreateSketcherCommandsBSpline(void)
{
    Gui::CommandManager &rcCmdMgr = Gui::Application::Instance->commandManager();

    rcCmdMgr.addCommand(new CmdSketcherBSplineDegree());
    rcCmdMgr.addCommand(new CmdSketcherBSplinePolygon());
    rcCmdMgr.addCommand(new CmdSketcherBSplineComb());
    rcCmdMgr.addCommand(new CmdSketcherBSplineKnotMultiplicity());
    rcCmdMgr.addCommand(new CmdSketcherBSplinePoleWeight());
    rcCmdMgr.addCommand(new CmdSketcherCompBSplineShowHideGeometryInformation());
    rcCmdMgr.addCommand(new CmdSketcherConvertToNURB());
    rcCmdMgr.addCommand(new CmdSketcherIncreaseDegree());
    rcCmdMgr.addCommand(new CmdSketcherDecreaseDegree());
    rcCmdMgr.addCommand(new CmdSketcherIncreaseKnotMultiplicity());
    rcCmdMgr.addCommand(new CmdSketcherDecreaseKnotMultiplicity());
    rcCmdMgr.addCommand(new CmdSketcherCompModifyKnotMultiplicity());
    rcCmdMgr.addCommand(new CmdSketcherInsertKnot());
}
