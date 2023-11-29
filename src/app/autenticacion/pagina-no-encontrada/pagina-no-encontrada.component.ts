import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-no-encontrada',
  template: `
  <div class="not-found-container">
    <img src="../../../../assets/img/404.gif" alt="Imagen no encontrada" class="not-found-image">
    
  <p class="title-error">
    404 <br> Whooops!, That's no moon.
    <br> its an Imperial battle station 
    <br>
    <br>
    <button type="menu" class="btn" >back to home</button></p> 
   
  </div>
 
`,
styles: [`
.not-found-container {
  width: 100%;
  height: 100vh;
  display: flex;
  position:relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column; 
}
.not-found-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0px;
  top: 0px;

}
.title-error{
  color: white;
  font-size: 40px;
  z-index:2;
  text-align: center;
}

`]
})
export class PaginaNoEncontradaComponent {

}
