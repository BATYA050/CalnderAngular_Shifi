<?php
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Methods: PUT, GET, POST");
   header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
   $events = array(
    array('title' => 'Event 1','start' => '2022-11-25'), array('title' => 'Event 2','start' => '2022-11-26'),
    array('title' => 'Event 3','start' => '2022-11-27'));
  
   echo json_encode($events);
   die();
   ?>