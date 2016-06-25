import 'angular-material-data-table/dist/md-data-table.min.css';
import mdDataTable from 'angular-material-data-table';

function PeopleController() {

  var vm = this;

  vm.selected = [];

  vm.query = {
    order: 'name',
    limit: 8,
    page: 1
  };

  vm.people = [
    {
      "_id": "576c642b1312d3d432ce6294",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Merritt Chan",
      "email": "merrittchan@waterbaby.com",
      "phone": "+1 (863) 555-2032",
      "address": "734 Boardwalk , Takilma, Hawaii, 2109"
    },
    {
      "_id": "576c642be1160c88d1eb0c1e",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "name": "Hardy Lawson",
      "email": "hardylawson@waterbaby.com",
      "phone": "+1 (939) 413-3219",
      "address": "194 Lamont Court, Bloomington, Minnesota, 8168"
    },
    {
      "_id": "576c642b236e71daf14cdc91",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Anne Rosales",
      "email": "annerosales@waterbaby.com",
      "phone": "+1 (830) 424-2537",
      "address": "738 Jay Street, Worcester, California, 5179"
    },
    {
      "_id": "576c642b8efa831418fec888",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "name": "Earline Knight",
      "email": "earlineknight@waterbaby.com",
      "phone": "+1 (890) 492-3345",
      "address": "925 Portland Avenue, Coleville, New Jersey, 4881"
    },
    {
      "_id": "576c642ba34450726f515051",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "name": "Ramirez Russo",
      "email": "ramirezrusso@waterbaby.com",
      "phone": "+1 (995) 546-3880",
      "address": "910 Fairview Place, Condon, Nevada, 2489"
    },
    {
      "_id": "576c642b4a97e2da893a6b0e",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Cecelia Herman",
      "email": "ceceliaherman@waterbaby.com",
      "phone": "+1 (916) 517-2907",
      "address": "604 Bank Street, Blue, Federated States Of Micronesia, 6036"
    },
    {
      "_id": "576c642b1e74bfb9625b5e01",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Virgie Merrill",
      "email": "virgiemerrill@waterbaby.com",
      "phone": "+1 (801) 554-2274",
      "address": "464 Lafayette Avenue, Bagtown, District Of Columbia, 930"
    },
    {
      "_id": "576c642b154a3d8f8d1ec546",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Perez Gallagher",
      "email": "perezgallagher@waterbaby.com",
      "phone": "+1 (983) 464-3349",
      "address": "258 Pulaski Street, Downsville, South Carolina, 5988"
    },
    {
      "_id": "576c642b322064c5211e8a38",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Addie Mcgowan",
      "email": "addiemcgowan@waterbaby.com",
      "phone": "+1 (994) 577-3549",
      "address": "757 Will Place, Mapletown, Delaware, 2493"
    },
    {
      "_id": "576c642b4be0d7175b125158",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Gracie Hanson",
      "email": "graciehanson@waterbaby.com",
      "phone": "+1 (988) 516-3901",
      "address": "107 Poplar Street, Vincent, Northern Mariana Islands, 225"
    }
  ];

}

export default angular
  .module('people.controller', [mdDataTable])
  .controller('PeopleController', PeopleController)
  .name;
