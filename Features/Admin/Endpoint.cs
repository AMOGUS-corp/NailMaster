using System.Text;
using FastEndpoints;
using FastEndpoints.Security;
using Microsoft.IdentityModel.Tokens;

namespace Admin
{
    public class Endpoint : Endpoint<LoginRequest>
    {
        public override void Configure()
        {
            Verbs(Http.POST);
            Routes("/api/login");
            AllowAnonymous();
        }

        public override async Task HandleAsync(LoginRequest r, CancellationToken c)
        {
            if (r.Username == "admin" && r.Password == "admin")
            {
                var jwtToken = JWTBearer.CreateToken(
                    signingKey: new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Ultrasecretkeylsdijfrhglsnvoir")).ToString(),
                    expireAt: DateTime.UtcNow.AddDays(1),
                    claims: new[] {("Username", r.Username)},
                    roles: new[] {"Admin"},
                    permissions: new[] {"Full access"});

                await SendAsync(new
                {
                    Username = r.Username,
                    Token = jwtToken
                });
            }
            else
            {
                ThrowError("Invalid credentials!");
            }
        }
    }
}