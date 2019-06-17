using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LeiloaJa.Models
{
    public class Leilao
    {
        [Key]
        public int IdLeilao { get; set; }
        [Required]
        public string Nome { get; set; }
        public decimal ValorInicial { get; set; }
        [Column(TypeName = "Boolean")]
        public Boolean IndCondicaoUso { get; set; }
        public DateTime DataDeAbertura { get; set; }
        public DateTime DataDeFinalizacao { get; set; }

        //public int IdLeiloeiroResponsavel { get; set; }
        //public virtual Leiloeiro LeiloeiroResponsavel { get; set; }
    }



}
