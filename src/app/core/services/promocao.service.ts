import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(
    private httpClient = HttpClient
  ) { }

  listar () {
    
  }
}
