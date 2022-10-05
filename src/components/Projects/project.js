import React from 'react';
import {Grid, Card, Image, Text, Badge, Group, Button} from '@mantine/core'
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  return (
    <div className="grid-container">
    <Grid justify="space-around">
        <Card shadow="sm" p="lg" radius="md" withBorder style={{margin:20, width: 300}}>
            <Card.Section>
                <Image src="images/movieapi.png" 
                height={160}
                />
            </Card.Section>
        <Group position="apart" mt="md" mb="xs">
                <Text  size="xl" weight={700}> Movies FTW</Text>
                <Badge color="pink" variant="light">
                    REACT
                </Badge>
                <Badge color="orange" variant="light">
                    API
                </Badge>
        </Group>
        <Text size="sm" color="dimmed" style={{height: 150}}>
        A site that shows popular, now playing, and top rated movies on the home page.
        Each movie has its own page with unique stats and description.
        Including a search bar to look up movies. Me being a film buff, this movie API seemed the most intriguing.
        </Text>
        <Group position="apart" mt="md" mb="xs">
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <a target="_blank" href="https://movieftw.netlify.app" className="button-link" rel="noopener noreferrer">View Site</a>
        </Button>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <a target="_blank" href="https://github.com/coltonwalker22/movieapi" className="button-link" rel="noopener noreferrer">View Code</a>
        </Button>

        </Group>
        </Card>
    <Card shadow="sm" p="lg" radius="md" withBorder style={{margin:20, width: 300}}>
            <Card.Section>
                <Image src="images/djreact.png" 
                height={160}
                />
            </Card.Section>
        <Group position="apart" mt="md" mb="xs">
                <Text  size="xl" weight={700}> DJ REACT</Text>
                <Badge color="pink" variant="light">
                    REACT
                </Badge>
        </Group>
        <Text size="sm" color="dimmed" style={{height: 150}}>
            learned how to get components to change color dynamically. 
            The requirements being that certain buttons had to change color to specific squares.
            I accomplished this by having the useState being an array.
            I added a button that could play music and randomize the colors!
        </Text>
        <Group position="apart" mt="md" mb="xs">
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                <a target="_blank" href="https://coltonsdjreact.netlify.app/" className="button-link" rel="noopener noreferrer">View Site</a>
            </Button>
            <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                <a target="_blank" href="https://github.com/coltonwalker22/djreact" className="button-link" rel="noopener noreferrer">View Code</a>
            </Button>
            </Group>
        </Card>
        <Card shadow="sm" p="lg" radius="md" withBorder style={{margin:20, width: 300}}>
            <Card.Section>
                <Image src="images/memegenerator.png" 
                height={160}
                />
            </Card.Section>
        <Group position="apart" mt="md" mb="xs">
                <Text  size="xl" weight={700}>memegenerator</Text>
                <Badge color="pink" variant="light">
                    REACT
                </Badge>
        </Group>
        <Text size="sm" color="dimmed" style={{height: 150}}>
            This is a fullstack app I created using CRUD with mongoDB. Create a profile, share
            and comment on your favorite guitar pedals. I utilized the Mantine UI for the App and components.
            I learned so much creating SCHEMAs and a "backend".
        </Text>
        <Group position="apart" mt="md" mb="xs">
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                <a target="_blank" href="https://colton-memegenerator.netlify.app/" className="button-link" rel="noopener noreferrer">View Site</a>
            </Button>
            <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                <a target="_blank" href="https://github.com/coltonwalker22/memegenerator" className="button-link" rel="noopener noreferrer">View Code</a>
            </Button>
            </Group>
        </Card>
        <Card shadow="sm" p="lg" radius="md" withBorder style={{margin:20, width: 300}}>
            <Card.Section>
                <Image src="images/pedalposts.png" 
                height={160}
                />
            </Card.Section>
        <Group position="apart" mt="md" mb="xs">
                <Text  size="xl" weight={700}>PedalPosts</Text>
                <Badge color="blue" variant="light">
                    FULLSTACK
                </Badge>
        </Group>
        <Text size="sm" color="dimmed" style={{height: 150}}>
            This is a fullstack app I created using CRUD with mongoDB. Create a profile, share
            and comment on your favorite guitar pedals. I utilized the Mantine UI for the App and components.
            I learned so much creating SCHEMAs and a "backend".
        </Text>
        <Group position="apart" mt="md" mb="xs">
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                <a target="_blank" href="https://pedalposts.herokuapp.com/" className="button-link" rel="noopener noreferrer">View Site</a>
            </Button>
            <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                <a target="_blank" href="https://github.com/coltonwalker22/pedalposts" className="button-link" rel="noopener noreferrer">View Code</a>
            </Button>
            </Group>
        </Card>
    </Grid>

    </div>
  )
}
