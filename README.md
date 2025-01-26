# Aberration Guesser
![image](https://github.com/user-attachments/assets/8b736156-cc98-41dc-aa64-3c1af85dff70)

## General Concept

Aberration Guesser is a tool designed to "gamify" the process of identifying aberrations in optical systems. It helps reinforce the user's understanding of **wavefront aberration plots** and **transverse ray error plots**. A plot displays one of nine possible aberrations, and the user must identify it by selecting the correct option from a list of checkboxes.

Aberrations are generally depicted using one of these two types of plots, which are mathematically related:

- A transverse ray error plot is a scaled derivative of the wavefront aberration plot.

---

List of Aberrations: Defocus, Tilt, Spherical, Coma, Astigmatism, Petzval, Distortion, Axial Color & Lateral Color

## Wavefront Aberration Formula

The wavefront aberration is described by the following formula, where the coefficients \( w \)  determine the magnitude of each aberration:

$$
W(h, \rho_x, \rho_y) = w_d h^2 + w_t h \rho_y + w_1 \rho^4 + w_2 \rho^2 (h \rho_y)^2+ \left( \frac{1}{2} w_3 + w_4 \right) h^2 \rho^2 + w_5 h^3 \rho_y + O(6)
$$

Where:

$$
\rho^2 = \rho_x^2 + \rho_y^2
$$

The coefficients are defined as:

$$ \( w_d \):  Defocus $$
$$ \( w_t \):  Tilt (y) $$
$$ \( w_1 \):  Spherical $$ 
$$ \( w_2 \):  Coma $$ 
$$ \( w_3 \):  Astigmatism $$ 
$$ \( w_4 \):  Petzval $$ 
$$ \( w_5 \):  Distortion $$ 

**Note:** Coefficient = Magnitude of the aberration.

---

## Transverse Ray Aberration Formula

This is derived (though not exactly) from the wavefront aberration formula. The coefficients \( \sigma \) represent the magnitude of each aberration:

For the transverse ray aberration in \( y \):

$$
\varepsilon_y = \sigma_1 \rho^3 \cos \theta + \sigma_2 \rho^2 h (2 + \cos 2\theta)+ (\sigma_3 + \sigma_4) h^2 \rho \cos \theta + \sigma_5 h^3 + O(5)
$$

For the transverse ray aberration in \( x \):

$$
\varepsilon_x = \sigma_1 \rho^3 \sin \theta + \sigma_2 \rho^2 h \sin 2\theta+ (\sigma_3 + \sigma_4) h^2 \rho \sin \theta + O(5)
$$

Where the coefficients are:

$$ \( \sigma_1 \):  Spherical $$ 
$$ \( \sigma_2 \):  Coma $$ 
$$ \( \sigma_3 \):  Astigmatism $$ 
$$ \( \sigma_4 \):  Petzval $$ 
$$ \( \sigma_5 \):  Distortion $$ 
