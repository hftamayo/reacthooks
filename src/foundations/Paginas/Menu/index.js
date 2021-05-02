import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './menu.css';

function Menu(){
    return(
        <div>
            <ul>
                <li>
                <BrowserRouter>
                    <Link to="/basicos">01 Basicos</Link>
                    {/*jsx, componentes, props, state, 
                    eventos y metodos, components naming,
                    hooks, stateless, stateful */}
                </BrowserRouter>                    
                </li>
                <li>
                <BrowserRouter>                    
                    <Link to="/cvida">02 Ciclo de Vida</Link>
                </BrowserRouter>                    
                </li>
                <li>
                <BrowserRouter>                    
                    <Link to="/rutas">03 Routing</Link>
                </BrowserRouter>                    
                </li>                
                <li>
                <BrowserRouter>                    
                    <Link to="/rutas">04 Redux</Link>
                </BrowserRouter>                    
                </li>                                
                <li>
                <BrowserRouter>                    
                    <Link to="/rutas">05 ReduxToolkit</Link>
                </BrowserRouter>                    
                </li>                                
                <li>
                    <BrowserRouter>                    
                        <Link to="/rutas">06 API Fetch: Axios</Link>
                    </BrowserRouter>                        
                </li>                                    
                <li>
                    <BrowserRouter>                    
                        <Link to="/rutas">07 API Fetch: ReactQuery</Link>
                    </BrowserRouter>                    
                </li>                                         
                <li>
                    <BrowserRouter>                    
                        <Link to="/rutas">08 CRUD Single Entity</Link>
                    </BrowserRouter>                    
                </li>                                      
                <li>
                    <BrowserRouter>                    
                        <Link to="/rutas">09 CRUD OneToMany</Link>
                    </BrowserRouter>                        
                </li>                                  
                <li>
                    <BrowserRouter>                    
                        <Link to="/rutas">10 Login</Link>
                    </BrowserRouter>                        
                </li>                         
                <li>
                    <BrowserRouter>                    
                        <Link to="/rutas">11 ShoppingCart</Link>
                    </BrowserRouter>                        
                </li>
            </ul>
        </div>
    )
}

export default Menu;