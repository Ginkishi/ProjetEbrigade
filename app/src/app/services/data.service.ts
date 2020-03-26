import { Injectable } from '@angular/core';
import { FormIntervention } from '../models/formIntervention';
import { VehiculeUtilise} from '../models/vehiculeutilise';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  PHP_API_SERVER = "http://localhost/eIntervention/api";
  constructor(private http: HttpClient) { }

  postInterventionForm( formIntervention: FormIntervention):Observable<any>{
         console.log(formIntervention);
       return this.http.post(`${this.PHP_API_SERVER}/intervention`,formIntervention);
   // return of(formIntervention);

  }
  postVehiculeUsedForm(vehiculeUtilise: VehiculeUtilise):Observable<any>{
    console.log(vehiculeUtilise);
  return this.http.post(`${this.PHP_API_SERVER}/vehicule`,vehiculeUtilise);
// return of(formIntervention);

}
}
