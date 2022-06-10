### Proof
Suppose $f(x)dx$ is on $\text{R}$. To show that $f(x)dx$ is *closed*, show $\int{^a_a} \; f(x) \; dx=0$.

- intuition: any line from $a$ to $a$ on $\text{R}$ forms a closed loop
- *conservative force* in physics

### Corollary
By the fundamental thereom of calculus, $f(x)dx$ is *exact*.

- has a *potential function* in physics

- integration on forms can be done on Euclidean space, however the power is apparent when integrating on $n$-dimensional manifolds
- *paths* require an orientation (note signed integrals), whereas *sets* do not
- Suppose $n$ is the dimension of the ambient space and $k$ is the dimension of the path, oriented surface, or oriented manifold we are integrating over
- Let $n\geq 1$ and $k=1$. Suppose $\gamma$ is a continuous path with a parameterization $\gamma(t)$. Consider an approximation:
$$
x_0 = \gamma(t_0) = a, x_1 = \gamma(t_1), ... , x_n = \gamma(t_n) = b 
$$
where $x_i$ is a vector.

- $\Delta x_i := x_{i+1}-x_i$ can be viewed as an infinitesimal tangent vector to $\gamma$ at $x_i$
- when $n=1$, we converted $\Delta x_i$ into $f(x_i)\Delta x_i$. note that $f(x_i)\Delta x_i$ is "linearly related" to $\Delta x_i$
- proportionality constants are generalized to linear transformations in higher dimensions
- we must define $\omega_{x_i}:R^n\rightarrow R$ which represents the infinitesimal work required to move an object from $x_i$ to $x_{i+1}$, that is, $\omega(\Delta x_i)$ is an infinitesimal real number
- if $T_{x_i}\gamma$ is the tangent space of $\gamma$ at $x_i$, then $\omega_{x_i}$ is a *linear functional* on $T_{x_i}\gamma$, that is, $\omega_{x_i}\in T^*_{x_i}\gamma$. This states that $\omega_{x_i}$ is a cotangent vector at $x_i$
- $\int(\omega, \gamma) \mapsto s$, where $s$ is a scalar

**1-form** - continuously assigns a cotangent vector (linear functional) to each point in $R^n$

- recall a linear transformation $T$ satisfies $cT(u)=T(cu)$ and $T(u)+T(v)=T(u+v)$


### Proof
If $\omega_{x_i}$ depends continuously on $x_i$, then $\sum_{i=0}^{n-1}\omega_{x_i}(\Delta x_i)$ is convergent if $\sup_{0\leq i \leq n-1}|\Delta x_i|$ (the maximum step size of the path) converges to zero and the total length $\sum_{i=0}^{n-1}|\Delta x_i|$ is bounded.
