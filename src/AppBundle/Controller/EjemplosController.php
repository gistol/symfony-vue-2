<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


/**
 * @Route("/ejemplos")
 *
 */
class EjemplosController extends Controller
{

    /**
     * @Route("/ejemplosVue", name="ejemplosVue")
     */
    public function ejemplosVueAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('vue/index.html.twig', []);
    }

    /**
     * @Route("/ejemplosEncore", name="ejemplosEncore")
     */
    public function ejemplosEncoreAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('encore/index.html.twig', []);
    }
}
