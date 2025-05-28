// get_papers.php
include 'db_connection.php';

$result = $conn->query("SELECT * FROM question_papers");
$papers = [];

while($row = $result->fetch_assoc()) {
  $papers[] = $row;
}

echo json_encode($papers);
