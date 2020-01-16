var body = $response.body;
body = '\/*\n@supported 04FF92A86FAC\n*\/\n' + body;

$done(body);
