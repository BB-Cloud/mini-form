/**
 * Created by Administrator on 2018/9/20.
 */


export default class attrTemplate{


  constructor(f,formAttribute) {
    this.f = f
    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }
  }


  init(){
    var fieldType=this.f.attr("class").split(" ")[1]
    this.feildHTML=""
    switch(fieldType){
      case "text":
        return this.cText(this.f)
        break;
      case "textarea":
        return this.cText(this.f)
        break;
    }
  }

  cText(f){
    return {
      html:this.createCID(f)+
      this.createCType(f)+
      this.createCCatipn(f)+
      this.createCValue(f)+
      this.createCPlaceholder(f)+
      this.createCWidth(f)+
      this.createCMaxLength(f)+
      this.createCRequire(),
      subhtml:{
        createCID:this.createCID(f),
        createCType:this.createCType(f),
        createCCatipn:this.createCCatipn(f),
        createCValue:this.createCValue(f),
        createCPlaceholder:this.createCPlaceholder(f),
        createCWidth:this.createCWidth(f),
        createCMaxLength:this.createCMaxLength(f),
        createCRequire:this.createCRequire(),
      }
    }
  }






  createCID(f){
    return `<div class="feildAttr">
            <lable>控件ID：</lable>
            <div class="mini-textbox" value=${f.data("id")} allowInput="false"> </div>
           </div>`
  }
  createCType(f){
    return `<div class="feildAttr">
            <lable>控件类型：</lable>
            <div class="mini-textbox" value=${f.attr("class").split(" ")[1]} allowInput="false"> </div>
           </div>`
  }

  createCCatipn(f){
    console.log(f);
    return `<div class="feildAttr fcaption">
            <lable>控件标题：</lable>
            <div id="fcaption" class="mini-textbox" value="${f.data("caption")}"></div>
           </div>`
  }
  createCValue(f){
    return `<div class="feildAttr">
            <lable>控 件 值：</lable>
            <div id="fValue" class="mini-textbox"></div>
           </div>`
  }
  createCPlaceholder(f){
    return `<div class="feildAttr">
            <lable>占  位  符：</lable>
            <div class="mini-textbox" value="${f.data("placeholder")}"></div>
           </div>`
  }
  createCWidth(f){
    return `<div class="feildAttr">
            <lable>控件宽度：</lable>
            <div class="mini-textbox" > </div>
           </div>`
  }
  createCMaxLength(f){
    return `<div class="feildAttr">
            <lable>控件宽度：</lable>
            <div class="mini-textbox" > </div>
           </div>`
  }
  createCRequire(f){
    return `<div class="feildAttr">
            <lable></lable>
            <div class="mini-checkbox" text="必须输入"</div>
           </div>`
  }





}
