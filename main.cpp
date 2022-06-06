#include <iostream>
#include <cstdlib>

class Game {
private:
	char _BOARD_[9];
	char _USER_PLAYER_SYMBOL_, _AUTO_PLAYER_SYMBOL_;
	int _USER_PLAYER_INDEX_, _AUTO_PLAYER_INDEX_;

public:
	Game();
	~Game();

	void run();

private:
	void GAME_RULE();
	void MAIN();

	inline void SHOW_BOARD();
	inline int GET_RANDOM(int min, int max) { return (rand() % max + 1) + min; }
	bool ISWIN(char);
	bool ISDRAW();
};

int main() {
	Game game;
	game.run();
	return 0;
}

Game::Game()
{
	srand(time(NULL));
	for (int i = 0; i < 9; i++) {
		_BOARD_[i] = '-';
	}
	_USER_PLAYER_INDEX_ = NULL, _AUTO_PLAYER_INDEX_ = NULL;
}

Game::~Game()
{
}

void Game::run()
{
	GAME_RULE();
	MAIN();
}

void Game::GAME_RULE()
{
	std::cout
		<< std::endl
		<< "Game Rule\n"
		<< "	~ First, Choose a symbol X or O.\n"
		<< "	~ You need to do is just type the index 1 - 9.\n\n";

	int count = 1;

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++, count++)
		{
			std::cout << " | " << count;
		}
		std::cout << " | " << std::endl;
	}

	std::cout
		<< "\n	~ Press any key to continue...";
	std::cin.sync(); std::cin.clear();
	if (std::cin.get());
}

void Game::MAIN()
{
	bool symbol_flag = false;
	bool play_flag = true;

	do
	{
		std::cout << "Choose a symbol O (or) X : ";
		std::cin >> _USER_PLAYER_SYMBOL_;

		if (_USER_PLAYER_SYMBOL_ == 'O') {
			_AUTO_PLAYER_SYMBOL_ = 'X';
			symbol_flag = true;
		}
		else if (_USER_PLAYER_SYMBOL_ == 'X')
		{
			_AUTO_PLAYER_SYMBOL_ = 'O';
			symbol_flag = true;
		}
		else
		{
			symbol_flag = false;
		}
	} while (!symbol_flag);

	while (play_flag)
	{
		system("cls");

		(_AUTO_PLAYER_INDEX_ == NULL) ?
			std::cout
			<< "Your Entered Index : -" << std::endl
			<< "Auto Entered Index : -" << std::endl
			:
			std::cout
			<< "Your Entered Index : " << _USER_PLAYER_INDEX_ << std::endl
			<< "Auto Entered Index : " << _AUTO_PLAYER_INDEX_ << std::endl;

		SHOW_BOARD();

		std::cout << "Enter Index : ";
		if (std::cin >> _USER_PLAYER_INDEX_ &&
			(_USER_PLAYER_INDEX_ > 0 && _USER_PLAYER_INDEX_ < 10) &&
			(_BOARD_[_USER_PLAYER_INDEX_ - 1] != _USER_PLAYER_SYMBOL_ && _BOARD_[_USER_PLAYER_INDEX_ - 1] != _AUTO_PLAYER_SYMBOL_)
			) {
			_BOARD_[_USER_PLAYER_INDEX_ - 1] = _USER_PLAYER_SYMBOL_;

			if (ISDRAW() || ISWIN(_USER_PLAYER_SYMBOL_)) {
				play_flag = false;
			}
			else
			{
				std::cout << "Auto Index : ";
				do
				{
					_AUTO_PLAYER_INDEX_ = GET_RANDOM(0, 9);
					std::cout << _AUTO_PLAYER_INDEX_ << std::endl;
				} while (
					(_AUTO_PLAYER_INDEX_ > 9) ||
					(_BOARD_[_AUTO_PLAYER_INDEX_ - 1] == _USER_PLAYER_SYMBOL_ || _BOARD_[_AUTO_PLAYER_INDEX_ - 1] == _AUTO_PLAYER_SYMBOL_)
					);
				_BOARD_[_AUTO_PLAYER_INDEX_ - 1] = _AUTO_PLAYER_SYMBOL_;

				if (ISWIN(_AUTO_PLAYER_SYMBOL_) || ISDRAW()) {
					play_flag = false;
				}
			}
		}
	}
	system("cls");
	std::cout
		<< "Your Entered Index : " << _USER_PLAYER_INDEX_ << std::endl
		<< "Auto Entered Index : " << _AUTO_PLAYER_INDEX_ << std::endl;

	SHOW_BOARD();

	if (ISWIN(_USER_PLAYER_SYMBOL_)) {
		std::cout << "You win" << std::endl;
	}
	else if (ISWIN(_AUTO_PLAYER_SYMBOL_)) {
		std::cout << "Auto win" << std::endl;
	}
	else if (ISDRAW()) {
		std::cout << "It's draw" << std::endl;
	}
}

inline void Game::SHOW_BOARD()
{
	std::cout
		<< "| " << _BOARD_[0] << " | " << _BOARD_[1] << " | " << _BOARD_[2] << " | " << std::endl
		<< "| " << _BOARD_[3] << " | " << _BOARD_[4] << " | " << _BOARD_[5] << " | " << std::endl
		<< "| " << _BOARD_[6] << " | " << _BOARD_[7] << " | " << _BOARD_[8] << " | " << std::endl;
}

bool Game::ISWIN(char symbol)
{
	if (
		(_BOARD_[0] == symbol && _BOARD_[1] == symbol && _BOARD_[2] == symbol) ||
		(_BOARD_[3] == symbol && _BOARD_[4] == symbol && _BOARD_[5] == symbol) ||
		(_BOARD_[6] == symbol && _BOARD_[7] == symbol && _BOARD_[8] == symbol) ||

		(_BOARD_[0] == symbol && _BOARD_[3] == symbol && _BOARD_[6] == symbol) ||
		(_BOARD_[1] == symbol && _BOARD_[4] == symbol && _BOARD_[7] == symbol) ||
		(_BOARD_[2] == symbol && _BOARD_[5] == symbol && _BOARD_[8] == symbol) ||

		(_BOARD_[0] == symbol && _BOARD_[4] == symbol && _BOARD_[8] == symbol) ||
		(_BOARD_[2] == symbol && _BOARD_[4] == symbol && _BOARD_[6] == symbol)
		) {
		return true;
	}
	else
	{
		return false;
	}
	
}

bool Game::ISDRAW()
{
	if (_BOARD_[0] == '-' || _BOARD_[1] == '-' || _BOARD_[2] == '-' ||
		_BOARD_[3] == '-' || _BOARD_[4] == '-' || _BOARD_[5] == '-' ||
		_BOARD_[6] == '-' || _BOARD_[7] == '-' || _BOARD_[8] == '-'
		) {
		return false;
	}
	else
	{
		return true;
	}
}
