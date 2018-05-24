<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$alerts = $twilio->monitor->v1->alerts
                              ->read(array(
                                         "endDate" => new \DateTime('2015-04-30'),
                                         "logLevel" => "warning",
                                         "startDate" => new \DateTime('2015-04-01')
                                     )
                              );

foreach ($alerts as $record) {
    print($record->sid);
}