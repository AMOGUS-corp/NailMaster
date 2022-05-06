using FastEndpoints;

namespace Admin
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class Response
    {
        public string Message => "This endpoint hasn't been implemented yet!";
    }
}