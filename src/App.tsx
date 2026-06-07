/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <FeaturedWork />
        <Manifesto />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
