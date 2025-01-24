import { useReducer, useLayoutEffect } from "react";
import initial from "./store/initial";
import reducer from "./store/reducer";

import Header from "./components/header/header";
import Screen from "./components/screen/screen";
import Action from "./components/action/action";

import { reducerCase } from "./utils";
import { getDatabase } from "./services/LocalStorage/LocalStorage.service.js";

const App = () => {
    const [state, dispatch] = useReducer(
        reducer, 
        initial,
    );
    useLayoutEffect(() => {
        const scheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        const stored = getDatabase({ 
            key: "theme" 
        });
        
        function handleScheme(e) {
            if (stored) { return }
            if (e.matches) {
                dispatch({
                    type: reducerCase.FETCH,
                    schemeID: "night"
                });
            } else {
                dispatch({
                    type: reducerCase.FETCH,
                    schemeID: "light"
                });
            }
        }
        dispatch({
            type: reducerCase.FETCH,
            schemeID: stored ? stored : scheme.matches ? "night" : "light"
        });
        scheme.addEventListener(
            "change", 
            handleScheme
        );
        () => {
            scheme.removeEventListener(
                "change", 
                handleScheme
            );
        };
    }, []);
    return (
        <main 
            className="text-tcm-clr" 
            data-mode={state.schemeID}>
            <section className="min-h-screen bg-bcm-100 flex justify-center items-center px-5 py-8">
                <div className="w-[80%] min-w-[300px] max-w-[350px]">
                    <Header 
                        state={state} 
                        dispatch={dispatch} 
                    />
                    <Screen 
                        state={state} 
                        dispatch={dispatch} 
                    />
                    <Action 
                        state={state} 
                        dispatch={dispatch} 
                    />
                </div>
            </section>
        </main>
    );
}

export default App;