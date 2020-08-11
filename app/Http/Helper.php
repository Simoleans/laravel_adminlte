<?php

use App\Departamentos;


/**
 * función para poner active o menú open en el menú
 * @param  [type] $route     ruta que se esta validando
 * @param  [type] $attribute si la dejas vacio (null), se pone la clase active por default, sino se pone la clase que se quiera poner
 * @return [type]            booleano (true:false)
 */
function active($route,$attribute = null)
{
	$attr = $attribute == null ? 'active' : $attribute;

	return request()->route()->named($route) ? $attr : false;
}

?>