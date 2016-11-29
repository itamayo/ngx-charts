/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/common/charts/chart.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_container';
import * as import7 from '../../../../src/utils/injection.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '@angular/core/src/animation/animation_transition';
import * as import13 from '@angular/core/src/animation/animation_sequence_player';
import * as import14 from '@angular/core/src/animation/animation_styles';
import * as import15 from '@angular/core/src/animation/animation_style_util';
import * as import16 from '@angular/core/src/animation/animation_keyframe';
import * as import17 from '@angular/core/src/animation/animation_player';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/core/src/security';
import * as import22 from '../../../../src/common/scale-legend.component';
import * as import23 from '../scale-legend.component.ngfactory';
import * as import24 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import25 from '../../../../src/common/legend.component';
import * as import26 from '../legend.component.ngfactory';
export class Wrapper_Chart {
  /*private*/ _eventHandler:Function;
  context:import0.Chart;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.Chart(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_legendData(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.legendData = currValue;
      this._changes['legendData'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_legendTitle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.legendTitle = currValue;
      this._changes['legendTitle'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Chart_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Chart_Host0 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import6.ViewContainer;
  compView_0:import2.AppView<import0.Chart>;
  _InjectionService_0_5:import7.InjectionService;
  _Chart_0_6:Wrapper_Chart;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Chart_Host0,renderType_Chart_Host,import8.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'chart',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import6.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_Chart0(this.viewUtils,this,0,this._el_0);
    this._InjectionService_0_5 = new import7.InjectionService(this.injectorGet(import10.ApplicationRef,this.parentIndex),this.injectorGet(import11.ComponentFactoryResolver,this.parentIndex),this.injector(0));
    this._Chart_0_6 = new Wrapper_Chart(this._vc_0.vcRef,this._InjectionService_0_5);
    this.compView_0.create(this._Chart_0_6.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._Chart_0_6.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import7.InjectionService) && (0 === requestNodeIndex))) { return this._InjectionService_0_5; }
    if (((token === import0.Chart) && (0 === requestNodeIndex))) { return this._Chart_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Chart_0_6.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const ChartNgFactory:import9.ComponentFactory<import0.Chart> = new import9.ComponentFactory<import0.Chart>('chart',View_Chart_Host0,import0.Chart);
const styles_Chart:any[] = ([] as any[]);
var Chart_animationState_states:any = {
  '*': {},
  void: {}
}
;
function Chart_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import12.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,'animationState',(nextState == 'void'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = Chart_animationState_states['*'];
  var startStateStyles:any = Chart_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = Chart_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {opacity: '0'}
      ]
      )),[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{opacity: '0'}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{opacity: '1'}])))
      ]
    ,500,100,(null as any),previousPlayers)]);
    totalTime = 600;
  }
  if ((player == (null as any))) { (player = new import17.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import15.renderStyles(element,view.renderer,import15.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import13.AnimationSequencePlayer(previousPlayers).destroy();
  import15.renderStyles(element,view.renderer,import15.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import12.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_Chart:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_Chart,{animationState: Chart_animationState_factory});
export class View_Chart0 extends import2.AppView<import0.Chart> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import6.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import18.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import6.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import18.Wrapper_NgIf;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Chart0,renderType_Chart,import8.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:svg',new import3.InlineArray2(2,'class','ng2d3'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n\n        ',(null as any));
    this.projectNodes(this._el_3,0);
    this._text_5 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_7 = new import6.ViewContainer(7,1,this,this._anchor_7);
    this._TemplateRef_7_5 = new import19.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import18.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_1,'\n\n      ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_9 = new import6.ViewContainer(9,1,this,this._anchor_9);
    this._TemplateRef_9_5 = new import19.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import18.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import20.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import19.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import20.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_1,((this._expr_19 == import1.UNINITIALIZED)? 'void': this._expr_19),((currVal_19 == import1.UNINITIALIZED)? 'void': currVal_19));
      animationTransition_animationState.onStart(import3.noop.bind(this).bind(this,'@animationState.start'));
      animationTransition_animationState.onDone(import3.noop.bind(this).bind(this,'@animationState.done'));
      this._expr_19 = currVal_19;
    }
    const currVal_7_0_0:any = (this.context.legend && (this.context.legendType === 'scaleLegend'));
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = (this.context.legend && (this.context.legendType === 'legend'));
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    const currVal_18:any = (this.context.view[0] + 'px');
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_18) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_18).toString()));
      this._expr_18 = currVal_18;
    }
    const currVal_20:any = ((this.context.view[0] * this.context.chartWidth) / 12);
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementAttribute(this._el_3,'width',((currVal_20 == null)? (null as any): currVal_20.toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this.context.view[1];
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementAttribute(this._el_3,'height',((currVal_21 == null)? (null as any): currVal_21.toString()));
      this._expr_21 = currVal_21;
    }
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_1,this._expr_19,'void');
    animationTransition_animationState.onStart(import3.noop.bind(this).bind(this,'@animationState.start'));
    animationTransition_animationState.onDone(import3.noop.bind(this).bind(this,'@animationState.done'));
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_Chart1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_Chart2(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
}
class View_Chart1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import22.ScaleLegend>;
  _ScaleLegend_0_3:import23.Wrapper_ScaleLegend;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import6.ViewContainer) {
    super(View_Chart1,renderType_Chart,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'scale-legend',new import3.InlineArray2(2,'class','chart-legend'),(null as any));
    this.compView_0 = new import23.View_ScaleLegend0(this.viewUtils,this,0,this._el_0);
    this._ScaleLegend_0_3 = new import23.Wrapper_ScaleLegend(this.parentView.parentView.injectorGet(import24.DomSanitizer,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._ScaleLegend_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.ScaleLegend) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ScaleLegend_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.data;
    this._ScaleLegend_0_3.check_valueRange(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.legendData;
    this._ScaleLegend_0_3.check_colors(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.view[1];
    this._ScaleLegend_0_3.check_height(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = ((this.parentView.context.view[0] * this.parentView.context.legendWidth) / 12);
    this._ScaleLegend_0_3.check_width(currVal_0_0_3,throwOnChange,false);
    if (this._ScaleLegend_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_Chart2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import25.Legend>;
  _Legend_0_3:import26.Wrapper_Legend;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import6.ViewContainer) {
    super(View_Chart2,renderType_Chart,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'legend',new import3.InlineArray2(2,'class','chart-legend'),(null as any));
    this.compView_0 = new import26.View_Legend0(this.viewUtils,this,0,this._el_0);
    this._Legend_0_3 = new import26.Wrapper_Legend();
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._Legend_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.Legend) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._Legend_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.legendData;
    this._Legend_0_3.check_data(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.legendTitle;
    this._Legend_0_3.check_title(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.colors;
    this._Legend_0_3.check_colors(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.view[1];
    this._Legend_0_3.check_height(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = ((this.parentView.context.view[0] * this.parentView.context.legendWidth) / 12);
    this._Legend_0_3.check_width(currVal_0_0_4,throwOnChange,false);
    if (this._Legend_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}