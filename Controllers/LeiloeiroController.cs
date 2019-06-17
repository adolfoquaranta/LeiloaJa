using LeiloaJa.Data;
using LeiloaJa.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace LeiloaJa.Controllers
{

    public class LeiloeiroController : Controller
    {
        private readonly ApplicationDbContext _ctx;
        private readonly Leiloeiro _leiloeiro;

        public LeiloeiroController(ApplicationDbContext ctx, IOptions<Leiloeiro> leiloeiro)
        {
            _ctx = ctx;
            _leiloeiro = leiloeiro.Value;

        }


        [Authorize]
        [HttpGet]
        [Route("api/Leiloeiro/Index")]
        public IEnumerable<Leiloeiro> Index()
        {
            try
            {
                return _ctx.Leiloeiros.ToList();
            }
            catch
            {
                throw;
            }
            //return objleiloeiro.ObterTodosLeiloeiros();
        }
        [Authorize]
        [HttpGet]
        [Route("api/Leiloeiro/Detalhar/{idLeiloeiro}")]
        public Leiloeiro Detalhar(int idLeiloeiro)
        {
            try
            {
                return _ctx.Leiloeiros.Find(idLeiloeiro);
            }
            catch
            {
                throw;
            }
            //return objleiloeiro.ObterLeiloeiro(idLeiloeiro);
        }
        [Authorize]
        [HttpPost]
        [Route("api/Leiloeiro/Salvar")]
        public int Salvar([FromBody]Leiloeiro leiloeiro)
        {
            try
            {
                _ctx.Leiloeiros.Add(leiloeiro);
                _ctx.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            //return objleiloeiro.AdicionarLeiloeiro(leiloeiro);
        }
        [Authorize]
        [HttpPut]
        [Route("api/Leiloeiro/Editar")]
        public int Editar([FromBody]Leiloeiro leiloeiro)
        {
            try
            {
                _ctx.Entry(leiloeiro).State = EntityState.Modified;
                _ctx.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            //return objleiloeiro.AtualizarLeiloeiro(leiloeiro);
        }
        [Authorize]
        [HttpDelete]
        [Route("api/Leiloeiro/Deletar/{idLeiloeiro}")]
        public int Deletar(int idLeiloeiro)
        {
            try
            {
                Leilao leiloeiro = _ctx.Leiloes.Find(idLeiloeiro);
                _ctx.Leiloes.Remove(leiloeiro);
                _ctx.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            //return objleiloeiro.RemoverLeiloeiro(idLeiloeiro);
        }


    }
}
