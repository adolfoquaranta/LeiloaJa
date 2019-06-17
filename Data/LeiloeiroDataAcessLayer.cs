using LeiloaJa.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace LeiloaJa.Data
{
    public class LeiloeiroDataAcessLayer
    {
        private readonly ApplicationDbContext _ctx;
        private readonly Leiloeiro _leiloeiro;


        public LeiloeiroDataAcessLayer(ApplicationDbContext ctx, IOptions<Leiloeiro> leiloeiro)
        {
            _ctx = ctx;
            _leiloeiro = leiloeiro.Value;

        }

        public IEnumerable<Leiloeiro> ObterTodosLeiloeiros()
        {
            try
            {
                return _ctx.Leiloeiros.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AdicionarLeiloeiro(Leiloeiro leiloeiro)
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
        }

        public int AtualizarLeiloeiro(Leiloeiro leiloeiro)
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
        }

        public Leiloeiro ObterLeiloeiro(int idLeiloeiro)
        {
            try
            {
                Leiloeiro leiloeiro = _ctx.Leiloeiros.Find(idLeiloeiro);
                return leiloeiro;
            }
            catch
            {
                throw;
            }
        }

        public int RemoverLeiloeiro(int idLeiloeiro)
        {
            try
            {
                Leiloeiro leiloeiro = _ctx.Leiloeiros.Find(idLeiloeiro);
                _ctx.Leiloeiros.Remove(leiloeiro);
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
