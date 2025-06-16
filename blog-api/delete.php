<?php
// Allow requests from any origin (for development; restrict in production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Optional: Allow these headers/methods if you're using POST, PUT, etc.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents('data.json'), true);
$newData = [];
$imageToDelete = null;

foreach ($data as $blog) {
    if ($blog['id'] == $_POST['id']) {
        $imageToDelete = $blog['image'];
        continue; // skip adding this to newData (i.e., delete it)
    }
    $newData[] = $blog;
}

// Delete the image file if it exists
if ($imageToDelete && file_exists($imageToDelete)) {
    unlink($imageToDelete);
}

file_put_contents('data.json', json_encode($newData, JSON_PRETTY_PRINT));

echo json_encode([
    "status" => "success",
    "message" => "Blog and image deleted"
]);
?>
