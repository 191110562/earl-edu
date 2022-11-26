import React from "react";
import useSound from 'use-sound';
import A from '../audio/A.mp3'
import B from '../audio/B.mp3';
import C from '../audio/C.mp3';
import D from '../audio/D.mp3';
import E from '../audio/E.mp3';
import F from '../audio/F.mp3';
import G from '../audio/G.mp3';
import H from '../audio/H.mp3';
import I from '../audio/I.mp3';
import J from '../audio/J.mp3';
import K from '../audio/K.mp3';
import L from '../audio/L.mp3';
import M from '../audio/M.mp3';
import N from '../audio/N.mp3';
import O from '../audio/O.mp3';
import P from '../audio/P.mp3';
import Q from '../audio/Q.mp3';
import R from '../audio/R.mp3';
import S from '../audio/S.mp3';
import T from '../audio/T.mp3';
import U from '../audio/U.mp3';
import V from '../audio/V.mp3';
import W from '../audio/W.mp3';
import X from '../audio/X.mp3';
import Y from '../audio/Y.mp3';
import Z from '../audio/Z.mp3';

export default function BoopButton() {
    const [A1] = useSound(A);
    const [B1] = useSound(B);
    const [C1] = useSound(C);
    const [D1] = useSound(D);
    const [E1] = useSound(E);
    const [F1] = useSound(F);
    const [G1] = useSound(G);
    const [H1] = useSound(H);
    const [I1] = useSound(I);
    const [J1] = useSound(J);
    const [K1] = useSound(K);
    const [L1] = useSound(L);
    const [M1] = useSound(M);
    const [N1] = useSound(N);
    const [O1] = useSound(O);
    const [P1] = useSound(P);
    const [Q1] = useSound(Q);
    const [R1] = useSound(R);
    const [S1] = useSound(S);
    const [T1] = useSound(T);
    const [U1] = useSound(U);
    const [V1] = useSound(V);
    const [W1] = useSound(W);
    const [X1] = useSound(X);
    const [Y1] = useSound(Y);
    const [Z1] = useSound(Z); 

    return (
        <div className="alphabet-container">
            <button onClick={A1}>A</button>
            <button onClick={B1}>B</button>
            <button onClick={C1}>C</button>
            <button onClick={D1}>D</button>
            <button onClick={E1}>E</button>
            <button onClick={F1}>F</button>
            <button onClick={G1}>G</button>
            <button onClick={H1}>H</button>
            <button onClick={I1}>I</button>
            <button onClick={J1}>J</button>
            <button onClick={K1}>K</button>
            <button onClick={L1}>L</button>
            <button onClick={M1}>M</button>
            <button onClick={N1}>N</button>
            <button onClick={O1}>O</button>
            <button onClick={P1}>P</button>
            <button onClick={Q1}>Q</button>
            <button onClick={R1}>R</button>
            <button onClick={S1}>S</button>
            <button onClick={T1}>T</button>
            <button onClick={U1}>U</button>
            <button onClick={V1}>V</button>
            <button onClick={W1}>W</button>
            <button onClick={X1}>X</button>
            <button onClick={Y1}>Y</button>
            <button onClick={Z1}>Z</button>
        </div>
    )
  };