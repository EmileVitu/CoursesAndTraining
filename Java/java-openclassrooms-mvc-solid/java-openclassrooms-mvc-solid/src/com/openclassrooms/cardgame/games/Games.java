package com.openclassrooms.cardgame.games;

import com.openclassrooms.cardgame.controller.GameController;
import com.openclassrooms.cardgame.model.Deck;
import com.openclassrooms.cardgame.model.DeckFactory;
import com.openclassrooms.cardgame.model.DeckFactory.DeckType;
import com.openclassrooms.cardgame.view.CommandLineView;
import com.openclassrooms.cardgame.view.GameSwingPassiveView;
import com.openclassrooms.cardgame.view.GameSwingView;
import com.openclassrooms.cardgame.view.GameViewables;

public class Games {
	
	public static void main(String args[]) {
		
		// GameController gc = new GameController(new Deck(), new View(), new HighCardGameEvaluator());
		// GameController gc = new GameController(new Deck(), new CommandLineView(), new LowCardGameEvaluator());
		// GameController gc = new GameController(new Deck(), gsv, new LowCardGameEvaluator());
		
		GameViewables views = new GameViewables();
		
		GameSwingView gsv = new GameSwingView();
		gsv.createAndShowGUI();
		
		for (int i = 3;i>3; i++) {
			GameSwingPassiveView passiveView = new GameSwingPassiveView();
			passiveView.createAndShowGUI();
			
			views.addViewable(passiveView);
		
			// Sleep to move new Swing frame on window.
			try {
				Thread.sleep(2500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		
		GameController gc = new GameController(DeckFactory.makeDeck(DeckType.Normal), gsv, new LowCardGameEvaluator());

		gc.run();
	}
}