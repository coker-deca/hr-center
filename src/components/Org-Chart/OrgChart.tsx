import { hierarchy, linkHorizontal, select, tree } from 'd3';
import React, { memo, useEffect, useRef } from 'react';

import { OrgChartType } from '../../DashboardCharts/Charts';
import useResizeObserver from '../../hooks/useResizeObserver';

function usePrevious(value: OrgChartType) {
  const ref = useRef<OrgChartType>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function OrgChart({ data }: { data: any }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(wrapperRef);

  const previouslyRenderedData = usePrevious(data);

  useEffect(() => {
    const svg = select(svgRef.current);

    const { width, height } =
      dimensions || wrapperRef.current?.getBoundingClientRect()!;
    // transform hierarchical data
    const root = hierarchy<any>(data);
    //   console.log(data);
    const treeLayout = tree().size([height, width]);

    const linkGenerator = linkHorizontal<any, any>()
      .x((link: any) => link.y || 20)
      .y((link: any) => link.x);

    // enrich hierarchical data with coordinates
    treeLayout(root);

    // nodes
    svg
      .selectAll(".node")
      .data(root.descendants())
      .join((enter) => enter.append("circle").attr("opacity", 0))
      .attr("class", "node")
      .attr("cx", (node: any) => node.y || 15)
      .attr("cy", (node: any) => node.x)
      .attr("r", 4)
      .attr("fill", "red")
      .transition()
      .duration(500)
      .delay((node) => node.depth * 300)
      .attr("opacity", 1);

    // links
    const enteringAndUpdatingLinks = svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("d", linkGenerator)
      .attr("stroke-dasharray", function () {
        if (this instanceof SVGPathElement) {
          const length = this.getTotalLength();
          return `${length} ${length}`;
        }
        return "";
      })
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("opacity", 1);

    if (data !== previouslyRenderedData) {
      enteringAndUpdatingLinks
        .attr("stroke-dashoffset", function () {
          if (this instanceof SVGPathElement) {
            return this.getTotalLength();
          }
          return 0;
        })
        .transition()
        .duration(500)
        .delay((link) => link.source.depth * 500)
        .attr("stroke-dashoffset", 0);
    }

    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join((enter) => enter.append("text").attr("opacity", 0))
      .attr("class", "label")
      .attr("x", (node: any) => node.y || 15)
      .attr("y", (node: any) => node.x - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", 14)
      .text((node) => node.data.name)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 200)
      .attr("opacity", 1);
  }, [data, dimensions, previouslyRenderedData]);

  return (
    <div
      ref={wrapperRef}
      style={{ margin: "1rem", minHeight: "250px", width: "80%" }}
    >
      <svg
        width={"100%"}
        height={"100%"}
        ref={svgRef}
        style={{ overflow: "visible" }}
      ></svg>
    </div>
  );
}

export default memo(OrgChart);
