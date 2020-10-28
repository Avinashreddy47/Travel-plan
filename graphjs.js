function createGraph(V,E)
{
	//v vertices
	//E edges
	let adjacency_list=[];
	for(let i=0;i<V;i++)
	{
		//for each vertex an empty list
		adjacency_list.push([]);
	}
	for(let i=0;i<E.length;i++)
	{
		//0 based indexing
		adjacency_list[E[i][0]-1].push(E[i][1]-1,E[i][2]);
		adjacency_list[E[i][1]-1].push(E[i][0]-1,E[i][2]);
	}
	return adjacency_list;
}
function djikstra(graph,V,src)
{
	//fill visited array with false
	let vis=Array(V).fill(0);
	let dist=[];
	for(let i=0;i<V;i++)
	{
		//second variable points to
		//parent one
		dist.push([1000,-1]);
	}
	dist[src][0]=0;
	for(let i=0;i<V-1;i++)
	{
		let mn=-1;
		for(let j=0;j<V;j++)
		{
			if(vis[j]===0)
			{
				//mn is index
				if(mn===-1 ||dist[j][0]<dist[mn][0])
				{
					mn=j;
				}
			}
		}
		vis[mn]=1;
		for(let j=0;j<graph[mn].length;j++)
		{
			let edge=graph[mn][j];
			if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[mn][0]+edge[1])
			{
				dist[edge[0]][0]=dist[mn][0]+edge[i];
				dist[edge[0]][1]=mn;
			}
		}
	}
	return dist;
}
let V=5;
let Edges=[[1,2,3],[1,4,2],[3,5,1],[3,4,3]];
let graph=createGraph(V,Edges);
let distances=djikstra(graph,v,src);
console.log(graph);