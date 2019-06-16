using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using LeiloaJa.Data;
using LeiloaJa.Models;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

namespace LeiloaJa.Controllers
{
    
    public class LeilaoController : Controller
    {
        private readonly ApplicationDbContext _ctx;
        private readonly Leilao _leilao;

        public LeilaoController(ApplicationDbContext ctx, IOptions<Leilao> leilao)
        {
            _ctx = ctx;
            _leilao = leilao.Value;

        }

        [Authorize]
        [HttpGet]
        [Route("api/Leilao/Index")]
        public IEnumerable<Leilao> Index()
        {
            try
            {
                return _ctx.Leiloes.ToList();
            }
            catch
            {
                throw;
            }
            //return objLeilao.ObterTodosLeiloes();
        }
        [Authorize]
        [HttpGet]
        [Route("api/Leilao/Detalhar/{idLeilao}")]
        public Leilao Detalhar(int idLeilao)
        {
            try
            {
                return _ctx.Leiloes.Find(idLeilao);
            }
            catch
            {
                throw;
            }
            //return objLeilao.ObterLeilao(idLeilao);
        }
        [Authorize]
        [HttpPost]
        [Route("api/Leilao/Salvar")]
        public int Salvar([FromBody]Leilao leilao)
        {
            try
            {
                _ctx.Leiloes.Add(leilao);
                _ctx.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            //return objLeilao.AdicionarLeilao(leilao);
        }
        [Authorize]
        [HttpPut]
        [Route("api/Leilao/Editar")]
        public int Editar([FromBody]Leilao leilao)
        {
            try
            {
                _ctx.Entry(leilao).State = EntityState.Modified;
                _ctx.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            //return objLeilao.AtualizarLeilao(leilao);
        }
        [Authorize]
        [HttpDelete]
        [Route("api/Leilao/Deletar/{idLeilao}")]
        public int Deletar(int idLeilao)
        {
            try
            {
                Leilao leilao = _ctx.Leiloes.Find(idLeilao);
                _ctx.Leiloes.Remove(leilao);
                _ctx.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            //return objLeilao.RemoverLeilao(idLeilao);
        }


    }
}
