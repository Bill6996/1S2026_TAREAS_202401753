#include <iostream>
using namespace std;

class Libro {
private:
    string titulo;
    string autor;
    int paginas;

public:
   
    Libro(string t, string a, int p) {
        titulo = t;
        autor = a;
        paginas = p;
    }

   
    void leer() {
        cout << "Estas leyendo el libro: " << titulo << endl;
    }

 
    void mostrarInfo() {
        cout << "Titulo: " << titulo << endl;
        cout << "Autor: " << autor << endl;
        cout << "Paginas: " << paginas << endl;
        
    }
};

int main() {
    // Crear dos objetos
    Libro libro1("El Principito", "Antoine ", 120);
    Libro libro2("Cien Años de Soledad", "Gabriel Garcia Marquez", 350);

    // Probar métodos
    libro1.mostrarInfo();
    libro1.leer();

    cout << endl;

    libro2.mostrarInfo();
    libro2.leer();

    return 0;
}
