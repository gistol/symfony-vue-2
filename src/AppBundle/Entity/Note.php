<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="notes")
 */
class Note
{
    /**
     * the note id
     *
     * @var integer
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * the title of the note
     *
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $title;

    /**
     * the body or content of the note
     *
     * @var string
     *
     * @ORM\Column(type="text")
     */
    private $body;

    /**
     * Get the note id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the title of the note
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Get the body or content of the note
     *
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * Set the note id
     *
     * @param integer  $id  the note id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Set the title of the note
     *
     * @param string  $title  the title of the note
     *
     * @return self
     */
    public function setTitle(string $title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Set the body or content of the note
     *
     * @param string  $body  the body or content of the note
     *
     * @return self
     */
    public function setBody(string $body)
    {
        $this->body = $body;

        return $this;
    }
}