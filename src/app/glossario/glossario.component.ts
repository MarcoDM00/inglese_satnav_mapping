import { Component } from '@angular/core';

@Component({
  selector: 'app-glossario',
  templateUrl: './glossario.component.html',
  styleUrls: ['./glossario.component.css']
})
export class GlossarioComponent {
  dati:{title:string, parole:{termini:string, significato:string}[]}[] = 
  [
    {title:"Satnav mapping", parole: [
      {termini:"Vector point", significato:"points in the space that are identified by coordinates"},
      {termini:"Plot", significato:"draw/sign"},
      {termini:"Metadata", significato:"a set of data that describe and gives informations about other data"},
      {termini:"satnav", significato:"navigation that dipends on data given by satellites"}
    ]},
    {title:"Tom Tom", parole: [
      {termini:"HQ", significato:"Head Quarters"},
      {termini:"Docked", significato:"Connected"}
    ]},
    {title:"Google Maps", parole: [
      {termini:"Driving directions", significato:"directions drivers have to follow to get to destination"},
      {termini:"Online-generated", significato:"information Is generated remotely, not from the device itself"},
      {termini:"Voice-guided", significato:"there's a robotic voice that tells you one by one the driving directions"},
      {termini:"Street level images", significato:"a 3D reproduction of the streets"}
    ]},
    {title:"Open Street Map", parole: [
      {termini:"OSM", significato:"Open Street Map, is a GPS technology"},
      {termini:"GPS", significato:"Global positioning system"}
    ]}
  ]
}