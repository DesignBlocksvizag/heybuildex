<?php
// Allow requests from any origin (for development; restrict in production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Optional: Allow these headers/methods if you're using POST, PUT, etc.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Your existing logic
$data = json_decode(file_get_contents('data.json'), true);
echo json_encode($data);
?>
