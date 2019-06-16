using IdentityServer4.EntityFramework.Options;
using LeiloaJa.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LeiloaJa.Data
{
    public class LeilaoDataAcessLayer
    {
        private readonly ApplicationDbContext _ctx;
        private readonly Leilao _leilao;

        public LeilaoDataAcessLayer(ApplicationDbContext ctx, IOptions<Leilao> leilao)
        {
            _ctx = ctx;
            _leilao = leilao.Value;

        }

        public IEnumerable<Leilao> ObterTodosLeiloes()
        {
            try
            {
                return _ctx.Leiloes.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AdicionarLeilao(Leilao leilao)
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
        }

        public int AtualizarLeilao(Leilao leilao)
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
        }

        public Leilao ObterLeilao(int idLeilao)
        {
            try
            {
                Leilao leilao = _ctx.Leiloes.Find(idLeilao);
                return leilao;
            }
            catch
            {
                throw;
            }
        }

        public int RemoverLeilao(int idLeilao)
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
        }

    }
}
