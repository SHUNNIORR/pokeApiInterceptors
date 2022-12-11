import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPokemonInfo } from './interfaces/pokemon.interface';
import { ServicioService } from './Services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form!: FormGroup;
  pokemonResp = {} as IPokemonInfo;
  constructor(private servicio: ServicioService,private fb: FormBuilder) { 
    this.createForm();
  }
  ngOnInit() {
    
  }

  createForm() {
    this.form = this.fb.group({
      pokeName: ["", [ Validators.required]]
    });
  }
  getPokemon(pokeName: string){
    this.servicio.getPokemon(pokeName).subscribe({
      next: (res) => {
        this.servicio.pokeinfo = res;
        this.pokemonResp = res;
        console.log('CLICK',this.servicio.pokeinfo)
      },
      error: (err) => {
        if(err.status===404){
          alert('No se encontró un pokemon con el nombre: '+pokeName)
        }
      }
    })
  }
  submitForm(){
    this.getPokemon(this.form.value.pokeName);
  }
}
