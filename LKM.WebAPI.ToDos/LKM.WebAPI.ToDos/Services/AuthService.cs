using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace LKM.WebAPI.ToDos.Services
{
    public class AuthService
    {
        public Token GerarToken()
        {
            var chave = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key.Secret));
            var tokenConfig = new SecurityTokenDescriptor
            {
                Expires = DateTime.UtcNow.AddHours(3),
                SigningCredentials = new SigningCredentials(chave, SecurityAlgorithms.HmacSha256)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenConfig);
            var tokenString = tokenHandler.WriteToken(token);

            return new Token() { AuthToken = tokenString };
        }
    }

    public class Token
    {
        public string? AuthToken { get; set; }
    }

    public class Key
    {
        public static readonly string Secret = "LKM.WebAPI.SecretKey.TokenAuth@Secret";
    }
}
