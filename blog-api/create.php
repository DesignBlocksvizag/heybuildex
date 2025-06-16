<?php
// Allow requests from any origin (for development; restrict in production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Optional: Allow these headers/methods if you're using POST, PUT, etc.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents('data.json'), true);

// Handle image upload
$uploadDir = 'uploads/';
$uploadedImagePath = '';

if (isset($_FILES['image']) && $_FILES['image']['error'] == UPLOAD_ERR_OK) {
    $filename = time() . '_' . basename($_FILES['image']['name']);
    $targetFile = $uploadDir . $filename;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        $uploadedImagePath = $targetFile;
    } else {
        echo json_encode(["status" => "error", "message" => "Image upload failed"]);
        exit;
    }
}

$newBlog = [
    "id" => time(),
    "image" => $uploadedImagePath,
    "heading" => $_POST['heading'],
    "description" => $_POST['description']
];

$data[] = $newBlog;
file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));

echo json_encode(["status" => "success", "message" => "Blog created", "blog" => $newBlog]);
?>
