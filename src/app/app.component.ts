import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import Drawflow from 'drawflow';
import { MessageComponent } from './message/message.component';

// import styleDrawflow from 'drawflow/dist/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('drawflow', {static: true}) drawflowDiv: HTMLElement;
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  title = 'demo-dragflow';
  mobile_item_selec = '';
  mobile_last_move = null;
  editor: any;
  transform = '';
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    console.log(this.drawflowDiv);
    this.editor = new Drawflow(this.drawflowDiv["nativeElement"]);
    this.editor.reroute = true;
    this.editor.editor_mode = 'edit';
    this.editor.drawflow = { "drawflow": { "Home": { "data": {} }, "Other": { "data": { "8": { "id": 8, "name": "personalized", "data": {}, "class": "personalized", "html": "\n            <div>\n              Personalized\n            </div>\n            ", "typenode": false, "inputs": { "input_1": { "connections": [{ "node": "12", "input": "output_1" }, { "node": "12", "input": "output_2" }, { "node": "12", "input": "output_3" }, { "node": "12", "input": "output_4" }] } }, "outputs": { "output_1": { "connections": [{ "node": "9", "output": "input_1" }] } }, "pos_x": 764, "pos_y": 227 }, "9": { "id": 9, "name": "dbclick", "data": { "name": "Hello World!!" }, "class": "dbclick", "html": "\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Task</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                ver Detalle\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ", "typenode": false, "inputs": { "input_1": { "connections": [{ "node": "8", "input": "output_1" }] } }, "outputs": { "output_1": { "connections": [{ "node": "12", "output": "input_2" }] } }, "pos_x": 209, "pos_y": 38 }, "12": { "id": 12, "name": "multiple", "data": {}, "class": "multiple", "html": "\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ", "typenode": false, "inputs": { "input_1": { "connections": [] }, "input_2": { "connections": [{ "node": "9", "input": "output_1" }] }, "input_3": { "connections": [] } }, "outputs": { "output_1": { "connections": [{ "node": "8", "output": "input_1" }] }, "output_2": { "connections": [{ "node": "8", "output": "input_1" }] }, "output_3": { "connections": [{ "node": "8", "output": "input_1" }] }, "output_4": { "connections": [{ "node": "8", "output": "input_1" }] } }, "pos_x": 179, "pos_y": 272 } } } } }; // Default example json for the library
    this.editor.start();

    var elements = document.getElementsByClassName('drag-drawflow');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('touchend', this.drop, false);
        elements[i].addEventListener('touchmove', this.positionMobile, false);
        elements[i].addEventListener('touchstart', this.drag, false);
    }
  }

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
  }

  destroyComponent() {
    this.componentRef.destroy();
  }


  positionMobile(ev) {
      this.mobile_last_move = event;
  }

  allowDrop(ev) {
      ev.preventDefault();
  }

  drag(ev) {
      if (ev.type === "touchstart") {
          this.mobile_item_selec = ev.target.closest(".drag-drawflow").getAttribute('data-node');
      } else {
          ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
      }
  }

  drop(ev) {
      if (ev.type === "touchend") {
          var parentdrawflow = document.elementFromPoint(this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY).closest("#drawflow");
          if (parentdrawflow != null) {
              this.addNodeToDrawFlow(this.mobile_item_selec, this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY);
          }
          this.mobile_item_selec = '';
      } else {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("node");
          this.addNodeToDrawFlow(data, ev.clientX, ev.clientY);
      }

  }

  addNodeToDrawFlow(name, pos_x, pos_y) {
    if (this.editor.editor_mode === 'fixed') {
        return false;
    }
    pos_x = pos_x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
    pos_y = pos_y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));


    switch (name) {
        case 'facebook':
            var facebook = `
        <div>
          <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>
        </div>
        `;
            this.editor.addNode('facebook', 0, 1, pos_x, pos_y, 'facebook', {}, facebook);
            break;
        case 'slack':
            var slackchat = `
          <div>
            <div class="title-box"><i class="fab fa-slack"></i> End</div>
          </div>
          `
            this.editor.addNode('slack', 1, 0, pos_x, pos_y, 'slack', {}, slackchat);
            break;

        case 'dbclick':
            var conector = 0;
            // var dbclick = `<app-test></app-test>`
            var dbclick = `
            <div>
            <div class="title-box"><i class="fas fa-mouse"></i> Task</div>
              <div class="box dbclickbox" ondblclick="showpopup(event)">
              
                ver Detallesssssss
                <div class="modal" style="display:none">
                  <div class="modal-content">
                    <span class="close" onclick="closemodal(event)">&times;</span>
                    Valor1 {name} !
                          <p>Descripcion<p/>
                     <input type="text" df-name>
                     <p>Role Name<p/>
                    <select name="example">
                      <option value="Administrador">Administrador</option>
                      <option value="Desarrollador">Desarrollador</option>
                      <option value="Gerencia">Gerencia</option>
                    </select>
                                        <p>Accion<p/>
                                        <select name="example">
                      <option value="Coordinar">Coordinar</option>
                      <option value="Ejecutar">Ejecutar</option>
                      <option value="Reprogramar">Reprogramar</option>
                    </select>
                    <input type="button" value="Grabar">
                  </div>

                </div>
              </div>
            </div>
            `;
            this.editor.addNode('dbclick', 1, 1, pos_x, pos_y, 'dbclick', { name: '' }, dbclick);
            break;
        case 'name_connection_line':
            if (conector = 5) {
            var connector_name = `
            <div class="title-box-connector">
              <input type="button" name="connector" value="Aprobado"/>
            </div>
            `};
            this.editor.addNode('name_connection_line', 1, 1, pos_x, pos_y, 'name_connection_line', {}, connector_name);
            break;
        case 'mikel':
            var mikel = `
            <div>
            <div class="title-box"><i class="fas fa-mouse"></i> Review</div>
              <div class="box dbclickbox" ondblclick="showpopup($event)">
                ver Detalle
                <div class="modal" style="display:none">
                  <div class="modal-content">
                    <span class="close" onclick="closemodal(event)">&times;</span>
                    Valor2 {name} !
                    <p>Descripcion<p/>
                     <input type="text" df-name>
                          <p>Colores<p/>
                           <select name="example">
                            <option value="Verde">Verde</option>
                            <option value="Rojo">Rojo</option>
                            <option value="Azul">Azul</option>
                          </select>
                                              <p>Accion<p/>
                                              <select name="example">
                            <option value="Coordinar">Coordinar</option>
                            <option value="Ejecutar">Ejecutar</option>
                            <option value="Reprogramar">Reprogramar</option>
                          </select>
                    <input type="button" value="Grabar">
                  </div>

                </div>
              </div>
            </div>
            `;
            this.editor.addNode('mikel', 1, 1, pos_x, pos_y, 'mikel', {}, mikel);
            break;
        default:
    }
    return true;
  }

  showpopup(e) {
    e.target.closest(".drawflow-node").style.zIndex = "9999";
    e.target.children[0].style.display = "block";
    //document.getElementById("modalfix").style.display = "block";

    //e.target.children[0].style.transform = 'translate('+translate.x+'px, '+translate.y+'px)';
    this.transform = this.editor.precanvas.style.transform;
    this.editor.precanvas.style.transform = '';
    this.editor.precanvas.style.left = this.editor.canvas_x + 'px';
    this.editor.precanvas.style.top = this.editor.canvas_y + 'px';
    console.log(this.transform);

    //e.target.children[0].style.top  =  -editor.canvas_y - editor.container.offsetTop +'px';
    //e.target.children[0].style.left  =  -editor.canvas_x  - editor.container.offsetLeft +'px';
    this.editor.editor_mode = "fixed";

  }

  
  closemodal(e) {
    e.target.closest(".drawflow-node").style.zIndex = "2";
    e.target.parentElement.parentElement.style.display = "none";
    //document.getElementById("modalfix").style.display = "none";
    this.editor.precanvas.style.transform = this.transform;
    this.editor.precanvas.style.left = '0px';
    this.editor.precanvas.style.top = '0px';
    this.editor.editor_mode = "edit";
  }
    
}
