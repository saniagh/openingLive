<?php

class Database
{

    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "opening_db";
    private $username = "openingUser";
    private $password = "52C9DBB708B755F63E7B52F7726893BC29D5CEB8526328F2BAABAA38CC1DCEFB";
    public $conn;

    // get the database connection
    public function getConnection()
    {

        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}

?>