import { LinkInterface, NodeInterface } from '../interfaces/graph';
import { FollowPosInterface } from '../interfaces/ast';

export const testLog = (
    nodes: NodeInterface[],
    links: LinkInterface[],
    followPos: FollowPosInterface[]
) => {
    console.log('LOG FOLLOWPOS');
    followPos.map((datum) => {
        console.log(datum.number, datum.symbol, datum.followpos.join(' '));
    });

    console.log('LOG NODES');
    nodes.map((node) => {
        console.log(node.id, node.values.join(' '));
    });
    console.log('\nLOG LINKS');
    links.map((link) => {
        console.log(link.source.id, link.target.id, link.transition);
    });
};
