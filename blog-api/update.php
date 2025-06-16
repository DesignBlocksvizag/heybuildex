<?php
// Allow requests from any origin (for development; restrict in production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Optional: Allow these headers/methods if you're using POST, PUT, etc.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents('data.json'), true);
$updated = false;

foreach ($data as &$blog) {
    if ($blog['id'] == $_POST['id']) {
        $blog['image'] = $_POST['image'];
        $blog['heading'] = $_POST['heading'];
        $blog['description'] = $_POST['description'];
        $updated = true;
        break;
    }
}

if ($updated) {
    file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode(["status" => "success", "message" => "Blog updated"]);
} else {
    echo json_encode(["status" => "error", "message" => "Blog not found"]);
}
?>
