using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LeiloaJa.Models
{
    public class Leiloeiro
    {
        [Key]
        public int IdLeiloeiro { get; set; }
        [Required]
        public string Nome { get; set; }

        //public string IdUsuario { get; set; }
        //public virtual ApplicationUser Usuario { get; set; }
        //public virtual List<Leilao> Leiloes { get; set; }
    }
}
