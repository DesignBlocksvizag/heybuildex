<?php
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
