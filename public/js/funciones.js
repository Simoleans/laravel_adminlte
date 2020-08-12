
/*
Funciones JS personalizadas
 */

$(document).ready(function() {
	//Datatable
	$('.data-table').DataTable({
	  "paging": true,
	  "lengthChange": true,
	  "searching": true,
	  "ordering": true,
	  "responsive": true,
	  "language": {
          	url:"plugins/datatables/spanish.json"
          }
	});


});//fin ready

$(function() {
    $('.toggle-button').bootstrapToggle({
      on: 'Activo',
      off: 'Desactivar'
    });
  })

