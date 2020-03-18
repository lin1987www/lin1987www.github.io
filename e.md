在MarkdownPad2中按下F6可以進行網頁預覽後，右鍵>另存新檔>網頁，完整封存，放入docs資料夾中，設定GitHub Pages。

Markdown provides backslash escapes for the following characters:

<pre>
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
</pre>

[LaTex速查](https://webdemo.myscript.com/views/math.html)

[方程式繪製](https://www.desmos.com/)

[積分計算](https://www.symbolab.com/solver/integral-calculator)

![formula](https://render.githubusercontent.com/render/math?math=\N\Z\R\Q\C)

[formula App](https://alexanderrodin.com/github-latex-markdown/)

$$ e = \lim _{n \to \infty} \left(1 + \dfrac{1}{n}\right) ^{n} $$

$$ exp(x) = \lim _{n \to \infty} \left(1 + \dfrac{x}{n}\right) ^{n} $$

符合指數乘法的性質 $ exp(x+y) = exp(x)  \cdot exp(y) $ 因此可以寫成 $ e^{x+y} = e^{x} \cdot e^{y} $

\begin{align\*} 
exp(x+y) &= exp(x) \cdot exp(y) \newline
exp(x+y) &= \lim _{n \to \infty} \left(1+\dfrac{x+y}{n}\right)^{n} \newline
exp(x) \cdot exp(y) &= \lim _{n \to \infty}\left(1+\dfrac{x}{n}\right)^{n} \cdot \lim _{n \to \infty}\left(1 + \dfrac{y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1+\dfrac{x}{n}\right)^{n} \cdot \left(1 + \dfrac{y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(\left(1+\dfrac{x}{n}\right) \cdot \left(1 + \dfrac{y}{n}\right)\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1+\dfrac{y}{n}+\dfrac{x}{n}+\dfrac{x\cdot y}{n^{2}}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1+\dfrac{x+y}{n}+\dfrac{x\cdot y}{n^{2}}\right)^{n} \newline
	&= \lim _{n \to \infty}\left((1+\dfrac{x\cdot y}{n^{2}})+\dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left((1+\dfrac{x\cdot y}{n^{2}})\cdot (1+ \dfrac{1}{1+\dfrac{x\cdot y}{n^{2}}} \cdot \dfrac{x+y}{n})\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1+\dfrac{x\cdot y}{n^{2}}\right)^{n}\cdot \left(1+ \dfrac{1}{1+\dfrac{x\cdot y}{n^{2}}} \cdot \dfrac{x+y}{n}\right)^{n} \newline
\end{align\*}

透過電腦繪圖我們可以知道以下極限值1 [圖形](https://www.desmos.com/calculator/6kevh7l1cv)
$$ \lim _{n \to \infty} \left(1 + \dfrac{x\cdot y}{n^{2}}\right) ^{n} = 1 $$

\begin{align\*} 
	&= \lim _{n \to \infty}\left(1+\dfrac{x\cdot y}{n^{2}}\right)^{n}\cdot \left(1+ \dfrac{1}{1+\dfrac{x\cdot y}{n^{2}}} \cdot \dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1\right)^{n}\cdot \left(1+ \dfrac{1}{ 1+\dfrac{x\cdot y} {n^{2}} } \cdot \dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1\right)^{n}\cdot \left(1+ \dfrac{1}{ (1+\dfrac{x\cdot y} {n^{2}})^{\dfrac{n}{n}} } \cdot \dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1\right)^{n}\cdot \left(1+ \dfrac{1}{ (1+\dfrac{x\cdot y} {n^{2}})^{n\cdot \dfrac{1}{n}} } \cdot \dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1\right)^{n}\cdot \left(1+ \dfrac{1}{ (1)^{\dfrac{1}{n}} } \cdot \dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty}\left(1\right)^{n}\cdot \left(1+ \dfrac{1}{ \sqrt [n] {1} } \cdot \dfrac{x+y}{n}\right)^{n} \newline
	&= \lim _{n \to \infty} \left(1+\dfrac{x+y}{n}\right)^{n} \newline
\end{align\*}