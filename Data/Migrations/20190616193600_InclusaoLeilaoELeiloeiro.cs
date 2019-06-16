using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LeiloaJa.Data.Migrations
{
    public partial class InclusaoLeilaoELeiloeiro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Leiloeiros",
                columns: table => new
                {
                    IdLeiloeiro = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leiloeiros", x => x.IdLeiloeiro);
                });

            migrationBuilder.CreateTable(
                name: "Leiloes",
                columns: table => new
                {
                    IdLeilao = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: true),
                    ValorInicial = table.Column<decimal>(nullable: false),
                    IndCondicaoUso = table.Column<bool>(type: "Boolean", nullable: false),
                    DataDeAbertura = table.Column<DateTime>(nullable: false),
                    DataDeFinalizacao = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leiloes", x => x.IdLeilao);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leiloeiros");

            migrationBuilder.DropTable(
                name: "Leiloes");
        }
    }
}
