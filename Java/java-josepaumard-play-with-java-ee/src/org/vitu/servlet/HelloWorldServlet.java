package org.vitu.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.vitu.model.Commune;

@WebServlet(urlPatterns = "/commune")
public class HelloWorldServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		//		PrintWriter writer = resp.getWriter()
		//		writer.print("Hello world\n");
		//		writer.print("<h2>BIGGER Hello world</h2>\n");
		//		writer.print("<h1>Hello world, it is " + new Date() + "</h1>");
		
//		String codePostal = req.getParameter("cp");
		
//		Commune commune = new Commune(codePostal, "Paris");
		
		Commune commune = new Commune();
		
		req.setAttribute("commune", commune);
		
		RequestDispatcher rd = req.getRequestDispatcher("commune.jsp"); 
		rd.forward(req, resp);
	}
}