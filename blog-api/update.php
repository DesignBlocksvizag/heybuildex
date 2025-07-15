<?php
// Allow requests from any origin (for development; restrict in production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Optional: Allow these headers/methods if you're using POST, PUT, etc.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Read JSON data
$data = json_decode(file_get_contents('data.json'), true);
$updated = false;

$id = $_POST['id'] ?? null;

if (!$id) {
    echo json_encode(["status" => "error", "message" => "ID is required"]);
    exit;
}

foreach ($data as &$blog) {
    if ($blog['id'] == $id) {

        // Update heading if provided
        if (!empty($_POST['heading'])) {
            $blog['heading'] = $_POST['heading'];
        }

        // Update description if provided
        if (!empty($_POST['description'])) {
            $blog['description'] = $_POST['description'];
        }

        // Handle image update
        if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
            $uploadDir = 'uploads/';
            $newImageName = uniqid() . '_' . basename($_FILES['image']['name']);
            $targetFile = $uploadDir . $newImageName;

            // Ensure upload directory exists
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
                // Delete old image if it exists
                if (!empty($blog['image']) && file_exists($blog['image'])) {
                    unlink($blog['image']);
                }

                // Update image path
                $blog['image'] = $targetFile;
            } else {
                echo json_encode(["status" => "error", "message" => "Image upload failed"]);
                exit;
            }
        }

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
