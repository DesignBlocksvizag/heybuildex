<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, api-key");

// Handle OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Read JSON body as object
$input = json_decode(file_get_contents("php://input"));

// Validate essential fields
if (!$input || empty($input->name) || empty($input->phone)) {
    http_response_code(400);
    echo json_encode(["error" => "name and phone are required."]);
    exit;
}

// Split full name
$nameParts = explode(' ', trim($input->name), 2);
$firstName = $nameParts[0];
$lastName = isset($nameParts[1]) ? $nameParts[1] : " ";

// Your Kylas API Key
$apiKey = "cdfed323-1582-4098-8a1d-7bf2b25c1c27:18665";

// Payload for Kylas
$data = [
    "firstName" => $input->name,
    "lastName" => "",
    "phoneNumbers" => [
        [
            "type" => "MOBILE",
            "code" => "IN",
            "value" => $input->phone,
            "dialCode" => "+91",
            "primary" => true
        ]
    ],
    "country" => "IN",
    "companyCountry" => "IN",
        "customFieldValues" => [
        "cfSteelType" => $input->steelType ?? null,
        "cfMaterial" => $input->material ?? null,
        "cfMessage" => $input->message ?? null
    ]
];

// Send to Kylas
$ch = curl_init("https://api.kylas.io/v1/leads");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "api-key: $apiKey"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Response
if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(["success" => true, "response" => json_decode($response)]);
} else {
    http_response_code($httpCode);
    echo json_encode(["error" => "Kylas API error", "details" => $response]);
}
?>
