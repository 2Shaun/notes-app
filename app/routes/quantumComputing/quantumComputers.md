- everything a quantum computer can do, a classical computer can *eventually* do
**amplitudes** - complex numbers, generalization of probability
- the amplitude for a physical event to occur is the sum of all amplitudes for which it could happen
- the state of a physical system is with a list of amplitudes
- the way a physical system changes is with a list of linear transformations
- a particle could reach a place with a positive amplitude and also with a negative amplitude. if those amplitudes cancel out, the event can not occur
 are similar to probabilities where, if you 
- prior to be measured, qubits are in superposition
- qubits can be 0, 1, or a linear combination of 0 and 1 
- two qubits that are near each other relate by a concept called **entanglement** (larger quantum state)
  - moving the direction of one qubit can change the probability of the entire state
  - the entangled state is described as a the sum of all wavefunctions, known as the overall wavefunction
  - this also represents a large obstacle in quantum computers because qubits will entangle with anything nearby (including whatever is used to stabilize or measure them)
- the number of states for $n$ qubits is $2^n$ and those $2^n$ states have a probability distribution
- when a quantum system is measured, it collapses into a classical state
- if radiation escapes the quantum computer, then it will be considered measured and collapse
**interference** - the sum of all wavefunctions
- destructive interference is used to decrease the probability of the incorrect answer and constructive interference is used to increase the probabilities of the correct answer
  - quantum algos are the choreography this interferences via qubit gates
- wave intereferece is when a wave with positive amplitude collides with one of negative amplitude
**qubit** - anything that can be manipulated in a superposition of 0 and 1 states. something to be implemented in the physical world, not a physical object itself. one implementation was done with a coil which a current flowed through where one energy state represented a 0 and one energy state represented a 1. when the coil was cooled to near absolute 0, they superconduct and the current is in a superposition of 0 and 1. an individual atomic nucleus, spinning clockwise or spinning counter-clockwise, and also be in a superposition of the 2 spin states.
- can there be superpositions of say 3 states (trinary) instead of 2 (binary)? how is the superposition of 1 and 0 defined? how do you know if it has been achieved?
- qubit gates is a way of controlling amplitude
- constructing the qubit gates to produce the right answer is why quantum computing is so difficult
- qubits can be visualized as a unit arrow in 3d space (Bloch sphere): if it's up, it's in the 1 state, if it's down it's in the 0 state
- a qubit is really described as a quantum wavefunction
## quantum computer engineering
- a chip will lock into a configuration once it's super cooled
## quantum complexity theory

- would need roughly 1m qubits to break common RSA encryption, but the most powerful quantum computers only have 100 qubits
**BQP** - a decision algorithm is placed in BQP if it solves the decision problem (with high probability) in polynomial time
**decision problem** - a yes or know question to be solved by an algo given an input
**quantum cryptography**
# quantum simulation
- simulating chemical reactions
- how electrons behave in different materials (semiconductor performance)
# quantum computing models
**universal quantum computing scheme** - similar to Turing complete but for quantum simulations
**measurement based** - set up entangled state and then measure qubits one by one
**adiabatic** - every system always moves toward minimum energy state. this means you want the minimum energy state to represent the solution to the problem. minimum of "energy landscape". Hamiltonians and eigenstates are involved
**annealing** - not part of universal quantum computing scheme
**quasi-particle** - simulating how a particle behaves using reactions of many particles
## obstacles
- entangling with the computing environment
- 
## Qiskit
- software framework
- run through examples of quantum circuits
- interface for quantum annealing (D-Wave hardware)
- quantum annealing vs. gate-model quantum computing

# big problems with quantum computers today
- decoherence
- any time information leaks out, the superposition is gone (entangled with its environment)
## the theory of quantum error correction and quantum fault tolerance
- low enough qubits leak, can be recovered from the remaining qubits
- can detect leaks and correct them